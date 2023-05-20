import React, { type PropsWithChildren, useEffect, useState } from "react"
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native"
import {
  PanGestureHandler,
  TouchableOpacity,
  ScrollView,
} from "react-native-gesture-handler"
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withDecay,
} from "react-native-reanimated"

type SheetProps = PropsWithChildren<{
  minHeight?: number
  maxHeight?: number
  expandedHeight?: number
}>

type SheetPositions = "minimised" | "maximised" | "expanded"

const window = Dimensions.get("window")
const screen = Dimensions.get("screen")

const NAV_HEIGHT = 48

export const Sheet = (props: SheetProps) => {
  const [dimensions, setDimensions] = useState({ window, screen })

  useEffect(() => {
    // Watch for screen size changes and update the dimensions
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen })
      }
    )
    return () => subscription?.remove()
  }, [])

  // Fixed values (for snap positions)
  const minHeight = props.minHeight || 270
  const maxHeight = props.maxHeight || dimensions.screen.height
  const expandedHeight = props.expandedHeight || dimensions.screen.height * 0.6

  // Animated values
  const position = useSharedValue<SheetPositions>("minimised")
  const navHeight = useSharedValue(0)
  const sheetHeight = useSharedValue(-minHeight)

  const springConfig = {
    damping: 500,
    stiffness: 200,
    mass: 1.25,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  }

  const DRAG_BUFFER = 40

  const onGestureEvent = useAnimatedGestureHandler({
    // Set the context value to the sheet's current height value
    onStart: (_ev, ctx: any) => {
      ctx.offsetY = sheetHeight.value
    },
    // Update the sheet's height value based on the gesture
    onActive: (ev, ctx: any) => {
      sheetHeight.value = ctx.offsetY + ev.translationY
    },
    // Snap the sheet to the correct position once the gesture ends
    onEnd: (ev) => {
      // 'worklet' directive is required for animations to work based on shared values
      "worklet"

      // Snap to expanded position if the sheet is dragged up from minimised position
      // or dragged down from maximised position
      const shouldExpand =
        (position.value === "maximised" &&
          -sheetHeight.value < maxHeight - DRAG_BUFFER) ||
        (position.value === "minimised" &&
          -sheetHeight.value > minHeight + DRAG_BUFFER)

      // Snap to minimised position if the sheet is dragged down from expanded position
      const shouldMinimise =
        position.value === "expanded" &&
        -sheetHeight.value < expandedHeight - DRAG_BUFFER

      // Snap to maximised position if the sheet is dragged up from expanded position
      const shouldMaximise =
        position.value === "expanded" &&
        -sheetHeight.value > expandedHeight + DRAG_BUFFER

      if (ev.velocityY > 500 && position.value !== "minimised") {
        sheetHeight.value = withDecay({
          velocity: ev.velocityY,
          clamp: [-maxHeight, -minHeight],
        })
        position.value = "minimised"
      }

      // Update the sheet's position with spring animation
      if (shouldExpand) {
        navHeight.value = withSpring(0, springConfig)
        sheetHeight.value = withSpring(-expandedHeight, springConfig)
        position.value = "expanded"
      } else if (shouldMaximise) {
        navHeight.value = withSpring(NAV_HEIGHT + 10, springConfig)
        sheetHeight.value = withSpring(-maxHeight, springConfig)
        position.value = "maximised"
      } else if (shouldMinimise) {
        navHeight.value = withSpring(0, springConfig)
        sheetHeight.value = withSpring(-minHeight, springConfig)
        position.value = "minimised"
      } else {
        sheetHeight.value = withSpring(
          position.value === "expanded"
            ? -expandedHeight
            : position.value === "maximised"
            ? -maxHeight
            : -minHeight,
          springConfig
        )
      }
    },
  })

  const sheetHeightAnimatedStyle = useAnimatedStyle(() => ({
    // The 'worklet' directive is included with useAnimatedStyle hook by default
    height: -sheetHeight.value,
  }))

  const sheetContentAnimatedStyle = useAnimatedStyle(() => ({
    paddingBottom: position.value === "maximised" ? 180 : 0,
    paddingTop: position.value === "maximised" ? 100 : 20,
    paddingHorizontal: 15,
  }))

  const sheetNavigationAnimatedStyle = useAnimatedStyle(() => ({
    height: navHeight.value,
    overflow: "hidden",
  }))

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[sheetHeightAnimatedStyle, styles.sheet]}>
          <View style={styles.handleContainer}>
            <View style={styles.handle} />
          </View>
          <Animated.View style={sheetContentAnimatedStyle}>
            <Animated.View style={sheetNavigationAnimatedStyle}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => {
                  navHeight.value = withSpring(0, springConfig)
                  sheetHeight.value = withSpring(-expandedHeight, springConfig)
                  position.value = "expanded"
                }}
              ></TouchableOpacity>
            </Animated.View>
            <SafeAreaView>
              <ScrollView>{props.children}</ScrollView>
            </SafeAreaView>
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  )
}

const styles = StyleSheet.create({
  // The sheet is positioned absolutely to sit at the bottom of the screen
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  sheet: {
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
    // Round the top corners
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    minHeight: 80,
    // Add a shadow to the top of the sheet
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 5,
  },
  handleContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  // Add a small handle component to indicate the sheet can be dragged
  handle: {
    width: "15%",
    height: 4,
    borderRadius: 8,
    backgroundColor: "#CCCCCC",
  },
  closeButton: {
    width: NAV_HEIGHT,
    height: NAV_HEIGHT,
    borderRadius: NAV_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
})

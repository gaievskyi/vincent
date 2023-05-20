import { type PropsWithChildren } from "react"
import { SafeAreaView, StyleSheet, View } from "react-native"
import {
  PanGestureHandler,
  TouchableOpacity,
  ScrollView,
} from "react-native-gesture-handler"
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from "react-native-reanimated"

import { NAV_HEIGHT, SheetPositions, springConfig } from "./config"
import { useDimensions, useSheet, useGestures } from "./hooks"

type SheetProps = PropsWithChildren<{
  minHeight?: number
  maxHeight?: number
  expandedHeight?: number
}>

export const Sheet = (props: SheetProps) => {
  const { minHeight = 260 } = props
  const dimensions = useDimensions()
  const { maxHeight, expandedHeight, position, navHeight, sheetHeight } =
    useSheet(props, dimensions)

  const handleGestures = useGestures({
    sheetHeight,
    minHeight,
    maxHeight,
    expandedHeight,
    position,
    navHeight,
  })

  const sheetHeightAnimatedStyle = useAnimatedStyle(() => ({
    height: -sheetHeight.value,
  }))

  const sheetContentAnimatedStyle = useAnimatedStyle(() => ({
    paddingBottom: position.value === SheetPositions.maximised ? 180 : 0,
    paddingTop: position.value === SheetPositions.maximised ? 100 : 20,
    paddingHorizontal: 15,
  }))

  const sheetNavigationAnimatedStyle = useAnimatedStyle(() => ({
    height: navHeight.value,
    overflow: "hidden",
  }))

  const isScrollEnabled = useDerivedValue(
    () => position.value === SheetPositions.expanded,
    []
  )

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={handleGestures}>
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
              />
            </Animated.View>
            <SafeAreaView>
              <ScrollView scrollEnabled={isScrollEnabled.value}>
                {props.children}
              </ScrollView>
            </SafeAreaView>
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  sheet: {
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    minHeight: 80,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5,
  },
  handleContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
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

import { type PropsWithChildren } from "react"
import { SafeAreaView, View } from "react-native"

import {
  PanGestureHandler,
  TouchableOpacity,
  ScrollView,
} from "react-native-gesture-handler"

import Animated, { withSpring } from "react-native-reanimated"

import { SheetPositions, springConfig } from "./constants"
import { styles } from "./styles"

import { useGestures } from "./use-gestures"
import { useSheet } from "./use-sheet"

export type SheetProps = PropsWithChildren<{
  minHeight?: number
  maxHeight?: number
  expandedHeight?: number
}>

export const Sheet = (props: SheetProps) => {
  const sheet = useSheet(props)
  const handleGestures = useGestures(sheet)

  const onClose = () => {
    sheet.expanderHeight.value = withSpring(0, springConfig)
    sheet.sheetHeight.value = withSpring(-sheet.expandedHeight, springConfig)
    sheet.position.value = SheetPositions.expanded
  }

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={handleGestures}>
        <Animated.View style={[sheet.sheetHeightAnimatedStyle, styles.sheet]}>
          <View style={styles.handleContainer}>
            <View style={styles.handle} />
          </View>
          <Animated.View style={sheet.sheetContentAnimatedStyle}>
            <Animated.View style={sheet.sheetNavigationAnimatedStyle}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={onClose}
              />
            </Animated.View>
            <SafeAreaView>
              <ScrollView scrollEnabled={sheet.isScrollEnabled.value}>
                {props.children}
              </ScrollView>
            </SafeAreaView>
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  )
}

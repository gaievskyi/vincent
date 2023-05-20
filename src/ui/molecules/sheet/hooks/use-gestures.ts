import Animated, {
  useAnimatedGestureHandler,
  withDecay,
  withSpring,
} from "react-native-reanimated"
import { PanGestureHandlerGestureEvent } from "react-native-gesture-handler"

import {
  DRAG_BUFFER,
  NAV_HEIGHT,
  SheetPositions,
  springConfig,
} from "../config"

type GestureContext = {
  offsetY: number
}

type GestureEventProps = {
  sheetHeight: Animated.SharedValue<number>
  minHeight: number
  maxHeight: number
  expandedHeight: number
  position: Animated.SharedValue<SheetPositions>
  navHeight: Animated.SharedValue<number>
}

export const calculateNewHeight = (
  offsetY: number,
  translationY: number,
  minHeight: number,
  maxHeight: number
): number => {
  let newHeight = offsetY + translationY
  if (newHeight < -maxHeight) {
    newHeight = -maxHeight
  } else if (newHeight > -minHeight) {
    newHeight = -minHeight
  }
  return newHeight
}

export function useGestures({
  sheetHeight,
  minHeight,
  maxHeight,
  expandedHeight,
  position,
  navHeight,
}: GestureEventProps) {
  return useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    GestureContext
  >({
    onStart: (_, context) => {
      context.offsetY = sheetHeight.value
    },
    onActive: (event, context) => {
      let newHeight = context.offsetY + event.translationY
      if (newHeight < -maxHeight) {
        newHeight = -maxHeight
      } else if (newHeight > -minHeight) {
        newHeight = -minHeight
      }
      sheetHeight.value = newHeight
    },
    onEnd: (event) => {
      "worklet"

      const shouldExpand =
        (position.value === SheetPositions.maximised &&
          -sheetHeight.value < maxHeight - DRAG_BUFFER) ||
        (position.value === SheetPositions.minimised &&
          -sheetHeight.value > minHeight + DRAG_BUFFER)

      const shouldMinimise =
        position.value === SheetPositions.expanded &&
        -sheetHeight.value < expandedHeight - DRAG_BUFFER

      const shouldMaximise =
        position.value === SheetPositions.expanded &&
        -sheetHeight.value > expandedHeight + DRAG_BUFFER

      if (
        event.velocityY > 500 &&
        position.value !== SheetPositions.minimised
      ) {
        sheetHeight.value = withDecay({
          velocity: event.velocityY,
          clamp: [-maxHeight, -minHeight],
        })
        position.value = SheetPositions.minimised
      }

      if (shouldExpand) {
        navHeight.value = withSpring(0, springConfig)
        sheetHeight.value = withSpring(-expandedHeight, springConfig)
        position.value = SheetPositions.expanded
      } else if (shouldMaximise) {
        navHeight.value = withSpring(NAV_HEIGHT + 10, springConfig)
        sheetHeight.value = withSpring(-maxHeight, springConfig)
        position.value = SheetPositions.maximised
      } else if (shouldMinimise) {
        navHeight.value = withSpring(0, springConfig)
        sheetHeight.value = withSpring(-minHeight, springConfig)
        position.value = SheetPositions.minimised
      } else {
        sheetHeight.value = withSpring(
          position.value === SheetPositions.expanded
            ? -expandedHeight
            : position.value === SheetPositions.maximised
            ? -maxHeight
            : -minHeight,
          springConfig
        )
      }
    },
  })
}

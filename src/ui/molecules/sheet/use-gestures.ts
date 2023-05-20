import {
  useAnimatedGestureHandler,
  withDecay,
  withSpring,
} from "react-native-reanimated"

import {
  DRAG_BUFFER,
  EXPANDER_HEIGHT,
  SheetPositions,
  springConfig,
} from "./constants"

import { type PanGestureHandlerGestureEvent } from "react-native-gesture-handler"
import { type Sheet } from "./use-sheet"

type GestureContext = {
  offsetY: number
}

export function useGestures({
  sheetHeight,
  minHeight,
  maxHeight,
  expandedHeight,
  position,
  expanderHeight,
}: Sheet) {
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
      const isMaximized = position.value === SheetPositions.maximized
      const isMinimized = position.value === SheetPositions.minimized
      const isExpanded = position.value === SheetPositions.expanded

      const isNearMaxHeight = -sheetHeight.value < maxHeight - DRAG_BUFFER
      const isBeyondMinHeight = -sheetHeight.value > minHeight + DRAG_BUFFER
      const isNearExpandedHeight =
        -sheetHeight.value < expandedHeight - DRAG_BUFFER
      const isBeyondExpandedHeight =
        -sheetHeight.value > expandedHeight + DRAG_BUFFER

      const shouldExpand =
        (isMaximized && isNearMaxHeight) || (isMinimized && isBeyondMinHeight)
      const shouldMinimize = isExpanded && isNearExpandedHeight
      const shouldMaximize = isExpanded && isBeyondExpandedHeight
      const shouldDecay = event.velocityY > 500 && !isMinimized

      if (shouldDecay) {
        sheetHeight.value = withDecay({
          velocity: event.velocityY,
          clamp: [-maxHeight, -minHeight],
        })
        position.value = SheetPositions.minimized
      }

      if (shouldExpand) {
        expanderHeight.value = withSpring(0, springConfig)
        sheetHeight.value = withSpring(-expandedHeight, springConfig)
        position.value = SheetPositions.expanded
      } else if (shouldMaximize) {
        expanderHeight.value = withSpring(EXPANDER_HEIGHT + 10, springConfig)
        sheetHeight.value = withSpring(-maxHeight, springConfig)
        position.value = SheetPositions.maximized
      } else if (shouldMinimize) {
        expanderHeight.value = withSpring(0, springConfig)
        sheetHeight.value = withSpring(-minHeight, springConfig)
        position.value = SheetPositions.minimized
      } else {
        sheetHeight.value = withSpring(
          position.value === SheetPositions.expanded
            ? -expandedHeight
            : position.value === SheetPositions.maximized
            ? -maxHeight
            : -minHeight,
          springConfig
        )
      }
    },
  })
}

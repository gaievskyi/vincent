import {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated"

import { useDimensions } from "~/utils/hooks"
import { SheetPositions } from "./constants"
import { type SheetProps } from "./sheet"

export function useSheet(props: SheetProps) {
  const dimensions = useDimensions()
  const minHeight = props.minHeight || 260
  const maxHeight = props.maxHeight || dimensions.screen.height
  const expandedHeight = props.expandedHeight || dimensions.screen.height * 0.6
  const position = useSharedValue<SheetPositions>(SheetPositions.minimized)
  const expanderHeight = useSharedValue(0)
  const sheetHeight = useSharedValue(-minHeight)
  const sheetHeightAnimatedStyle = useAnimatedStyle(() => ({
    height: -sheetHeight.value,
  }))
  const sheetContentAnimatedStyle = useAnimatedStyle(() => ({
    paddingBottom: position.value === SheetPositions.maximized ? 180 : 0,
    paddingTop: position.value === SheetPositions.maximized ? 100 : 20,
    paddingHorizontal: 15,
  }))
  const sheetNavigationAnimatedStyle = useAnimatedStyle(() => ({
    height: expanderHeight.value,
    overflow: "hidden",
  }))
  const isScrollEnabled = useDerivedValue(
    () => position.value === SheetPositions.expanded,
    [position]
  )
  return {
    sheetHeight,
    minHeight,
    maxHeight,
    expandedHeight,
    position,
    expanderHeight,
    sheetHeightAnimatedStyle,
    sheetContentAnimatedStyle,
    sheetNavigationAnimatedStyle,
    isScrollEnabled,
  }
}

export type Sheet = ReturnType<typeof useSheet>

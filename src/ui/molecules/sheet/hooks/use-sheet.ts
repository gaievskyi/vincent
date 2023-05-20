import { type PropsWithChildren, useMemo } from "react"
import { useSharedValue } from "react-native-reanimated"
import { type Dimensions } from "./use-dimensions"
import { SheetPositions } from "../config"

type SheetProps = PropsWithChildren<{
  minHeight?: number
  maxHeight?: number
  expandedHeight?: number
}>

export function useSheet(props: SheetProps, dimensions: Dimensions) {
  const { minHeight = 260 } = props

  const maxHeight = useMemo(
    () => props.maxHeight || dimensions.screen.height,
    [props.maxHeight, dimensions]
  )

  const expandedHeight = useMemo(
    () => props.expandedHeight || dimensions.screen.height * 0.6,
    [props.expandedHeight, dimensions]
  )

  const position = useSharedValue<SheetPositions>(SheetPositions.minimised)
  const navHeight = useSharedValue(0)
  const sheetHeight = useSharedValue(-minHeight)

  return {
    maxHeight,
    expandedHeight,
    position,
    navHeight,
    sheetHeight,
  }
}

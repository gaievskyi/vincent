import { useEffect, useState } from "react"
import { Dimensions as NativeDimensions } from "react-native"

const initialDimensions = {
  window: NativeDimensions.get("window"),
  screen: NativeDimensions.get("screen"),
}

export type Dimensions = typeof initialDimensions

export function useDimensions(): Dimensions {
  const [dimensions, setDimensions] = useState(initialDimensions)

  useEffect(() => {
    const subscription = NativeDimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen })
      }
    )

    return () => subscription?.remove()
  }, [])

  return dimensions
}

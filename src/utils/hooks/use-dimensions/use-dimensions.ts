import { useEffect, useState } from "react"
import { Dimensions } from "react-native"

const initialDimensions = {
  window: Dimensions.get("window"),
  screen: Dimensions.get("screen"),
}

export type DimensionsType = typeof initialDimensions

export function useDimensions(): DimensionsType {
  const [dimensions, setDimensions] = useState(initialDimensions)

  useEffect(() => {
    const dimensionsSubscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen })
      }
    )

    return () => dimensionsSubscription?.remove()
  }, [])

  return dimensions
}

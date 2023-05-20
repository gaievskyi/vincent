export const SheetPositions = {
  minimized: "minimized",
  maximized: "maximized",
  expanded: "expanded",
} as const

export type SheetPositions = keyof typeof SheetPositions

export const springConfig = {
  damping: 200,
  stiffness: 150,
  mass: 1,
  overshootClamping: true,
  restDisplacementThreshold: 0.01,
  restSpeedThreshold: 0.01,
}

export const DRAG_BUFFER = 50
export const EXPANDER_HEIGHT = 30

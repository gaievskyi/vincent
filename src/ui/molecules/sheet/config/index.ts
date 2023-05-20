export const SheetPositions = {
  minimised: "minimised",
  maximised: "maximised",
  expanded: "expanded",
} as const

export type SheetPositions = keyof typeof SheetPositions

export const springConfig = {
  damping: 100,
  stiffness: 300,
  mass: 1,
  overshootClamping: true,
  restDisplacementThreshold: 0.01,
  restSpeedThreshold: 0.01,
}

export const DRAG_BUFFER = 40
export const NAV_HEIGHT = 48

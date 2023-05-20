import { type PropsWithChildren } from "react"
import { Pressable, type StyleProp, type ViewStyle } from "react-native"

import { styles } from "./styles"

type IconButtonProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>
}>

export const IconButton = ({ children, style }: IconButtonProps) => (
  <Pressable style={{ ...styles.button, ...(style as any) }}>
    {children}
  </Pressable>
)

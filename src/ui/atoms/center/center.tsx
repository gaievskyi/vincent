import { PropsWithChildren } from "react"
import { View, type ViewProps, StyleSheet } from "react-native"

type CenterProps = PropsWithChildren<ViewProps>

export const Center = ({ children, ...viewProps }: CenterProps) => (
  <View
    style={styles.view}
    {...viewProps}
  >
    {children}
  </View>
)

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

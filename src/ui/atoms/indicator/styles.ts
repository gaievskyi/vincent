import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  indicatorBox: {
    gap: 12,
  },
  indicatorHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
  },
  indicator: {
    height: 8,
    backgroundColor: "black",
    borderRadius: 25,
  },
  indicatorValue: {
    alignSelf: "flex-end",
    fontWeight: "700",
  },
  indicatorOuter: {
    height: 2,
    justifyContent: "center",
    backgroundColor: "#ccc",
    borderRadius: 20,
  },
})

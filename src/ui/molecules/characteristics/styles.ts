import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  characteristics: {
    marginVertical: 20,
    marginBottom: 35,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  characteristic: {
    gap: 5,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 50,
    borderColor: "#ccc",
    borderWidth: 1.5,
  },
  characteristicValue: {
    fontWeight: "600",
    fontSize: 12,
  },
})

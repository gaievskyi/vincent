import { StyleSheet } from "react-native"
import { EXPANDER_HEIGHT } from "./constants"

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  sheet: {
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    minHeight: 80,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 5,
  },
  handleContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  handle: {
    width: "15%",
    height: 5,
    borderRadius: 8,
    backgroundColor: "#CCCCCC",
  },
  closeButton: {
    width: EXPANDER_HEIGHT,
    height: EXPANDER_HEIGHT,
    borderRadius: EXPANDER_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
})

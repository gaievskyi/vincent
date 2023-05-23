import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
    height: "100%",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 60,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    width: "65%",
    paddingHorizontal: 20,
    paddingVertical: 0,
    justifyContent: "center",
  },
  search: {
    width: "100%",
    height: "100%",
    color: "white",
  },
  name: {
    color: "#ef8243",
  },
  buttonBox: {
    gap: 7,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 12,
    gap: 10,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonLabel: {
    color: "white",
    fontSize: 12,
  },
})

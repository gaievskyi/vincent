import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
    position: "relative",
  },
  avatar: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    position: "relative",
  },
  avatarBox: {
    width: "100%",
    height: "100%",
  },
  actions: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 50,
    paddingHorizontal: 15,
  },
  actionsBottom: {
    width: "100%",
    position: "absolute",
    bottom: "35%",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 55,
    height: 45,
    width: 45,
  },
  profile: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  stats: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  friends: {},
  profileHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  location: {
    fontSize: 12,
    fontWeight: "500",
    color: "black",
  },
  input: {
    fontSize: 30,
    fontWeight: "500",
  },
  name: {
    fontSize: 40,
    fontWeight: "700",
  },
  breed: {
    fontSize: 24,
    fontWeight: "300",
  },
  indicators: {
    gap: 15,
  },
})

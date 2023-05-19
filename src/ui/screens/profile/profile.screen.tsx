import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Pressable,
} from "react-native"
import { Octicons } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import { Feather } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { FontAwesome5 } from "@expo/vector-icons"

import { type ProfileProps } from "~/modules"

const image = {
  uri: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=100",
}

export const ProfileScreen = ({ navigation }: ProfileProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.avatar}
      >
        <View style={styles.actions}>
          <Pressable style={styles.button}>
            <Feather
              name="image"
              size={20}
              color="black"
            />
          </Pressable>
          <Pressable style={styles.button}>
            <Feather
              name="edit"
              size={20}
              color="black"
            />
          </Pressable>
        </View>
        <View style={styles.imageScroll}>
          <View
            style={{
              ...styles.imageScrollItem,
              backgroundColor: "black",
            }}
          />
          <View style={styles.imageScrollItem} />
          <View style={styles.imageScrollItem} />
        </View>
      </ImageBackground>
      <View style={styles.profile}>
        <View style={styles.expandable} />
        <View style={styles.profileHead}>
          <View>
            <Ionicons
              name="ios-male"
              size={24}
              color="black"
            />
            <Text style={styles.name}>Vincent</Text>
            <Text style={styles.breed}>Yorkshire Terrier</Text>
          </View>
          <View style={styles.locationBox}>
            <Octicons
              name="location"
              size={14}
              color="black"
            />
            <Text style={styles.location}>from Poland, Katowice</Text>
          </View>
        </View>
        <View style={styles.characteristics}>
          <View style={styles.characteristic}>
            <Text style={styles.characteristicValue}>5 years</Text>
          </View>
          <View style={styles.characteristic}>
            <FontAwesome5
              name="weight"
              size={18}
              color="black"
            />
            <Text style={styles.characteristicValue}>5kg</Text>
          </View>
          <View style={styles.characteristic}>
            <MaterialIcons
              name="height"
              size={18}
              color="black"
            />
            <Text style={styles.characteristicValue}>27cm</Text>
          </View>
          <View style={styles.characteristic}>
            <Text style={styles.characteristicValue}>Sterilized</Text>
          </View>
          <View style={styles.characteristic}>
            <Text style={styles.characteristicValue}>Good boy</Text>
          </View>
          <View style={styles.characteristic}>
            <FontAwesome5
              name="fish"
              size={18}
              color="black"
            />
            <Text style={styles.characteristicValue}>Fish-lover</Text>
          </View>
        </View>
        <View style={styles.indicators}>
          <View style={styles.indicatorBox}>
            <Text>Happiness</Text>
            <View style={styles.indicatorOuter}>
              <View style={styles.indicator} />
            </View>
          </View>
          <View style={styles.indicatorBox}>
            <Text>Relationships</Text>
            <View style={styles.indicatorOuter}>
              <View style={{ ...styles.indicator, width: "50%" }} />
            </View>
          </View>
        </View>
        <View style={styles.achievements}></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
    maxHeight: "60%",
    position: "relative",
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
  imageScroll: {
    flexDirection: "row",
    gap: 5,
    position: "absolute",
    alignSelf: "center",
    bottom: 60,
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
  },
  imageScrollItem: {
    width: 5,
    height: 5,
    backgroundColor: "rgba(0, 0 , 0, 0.2)",
    borderRadius: 10,
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
    position: "absolute",
    bottom: 0,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 50,
    minHeight: "35%",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 40,
    elevation: 15,
  },
  expandable: {
    alignSelf: "center",
    width: "20%",
    backgroundColor: "#ccc",
    height: 5,
    borderRadius: 10,
    position: "absolute",
    top: 13,
  },
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
    fontSize: 14,
    color: "hsl(0, 0%, 46.666666666666664%)",
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
  characteristics: {
    marginVertical: 20,
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
  indicators: {
    gap: 15,
  },
  indicatorBox: {
    gap: 8,
  },
  indicator: {
    height: 10,
    width: "75%",
    backgroundColor: "black",
    borderRadius: 25,
  },
  indicatorOuter: {
    height: 3,
    justifyContent: "center",
    backgroundColor: "#ccc",
    borderRadius: 20,
  },
  achievements: {},
})

import {
  Text,
  Button,
  StyleSheet,
  View,
  SafeAreaView,
  Pressable,
  TextInput,
} from "react-native"
import { Feather } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import { Foundation } from "@expo/vector-icons"
import { EvilIcons } from "@expo/vector-icons"

import { type HomeProps } from "~/modules"

export const HomeScreen = ({ navigation }: HomeProps) => (
  <SafeAreaView>
    <View style={styles.searchBox}>
      <EvilIcons
        name="search"
        size={24}
        color="black"
      />
      <TextInput
        placeholder="Search"
        style={styles.search}
      />
    </View>
    <View style={styles.container}>
      <View style={styles.buttonBox}>
        <Pressable style={styles.button}>
          <Ionicons
            name="heart"
            size={32}
            color="white"
          />
          <Text style={styles.buttonLabel}>Veterinary</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Feather
            name="scissors"
            size={32}
            color="white"
          />
          <Text style={styles.buttonLabel}>Grooming</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Foundation
            name="guide-dog"
            size={32}
            color="white"
          />
          <Text style={styles.buttonLabel}>Walking</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Foundation
            name="guide-dog"
            size={32}
            color="white"
          />
          <Text style={styles.buttonLabel}>Playing</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Foundation
            name="guide-dog"
            size={32}
            color="white"
          />
          <Text style={styles.buttonLabel}>Training</Text>
        </Pressable>
      </View>
      <View></View>
    </View>
  </SafeAreaView>
)

const styles = StyleSheet.create({
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
    gap: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 120,
    height: 120,
    borderRadius: 120,
    borderColor: "white",
    borderWidth: 2,
    gap: 5,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonLabel: {
    color: "white",
  },
})

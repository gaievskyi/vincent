import { Text, View, SafeAreaView, Pressable, TextInput } from "react-native"
import { Feather } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import { Foundation } from "@expo/vector-icons"
import { EvilIcons } from "@expo/vector-icons"

import { styles } from "./styles"
import { type BottomTabHomeProps } from "~/modules"

type HomeScreenProps = BottomTabHomeProps

export const HomeScreen = ({}: HomeScreenProps) => (
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
          <Text style={styles.buttonLabel}>Training</Text>
        </Pressable>
      </View>
      <View></View>
    </View>
  </SafeAreaView>
)

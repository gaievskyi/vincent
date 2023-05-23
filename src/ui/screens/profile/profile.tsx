import { View, Text, ImageBackground, Pressable } from "react-native"
import { Octicons } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import { Feather } from "@expo/vector-icons"

import { Characteristics, Sheet } from "~/ui/molecules"
import { Indicator } from "~/ui/atoms"

import { styles } from "./styles"
import { image, profileCharacteristics } from "./mock-data"

import { type BottomTabProfileProps } from "~/modules"

type ProfileScreenProps = BottomTabProfileProps

export const ProfileScreen = ({}: ProfileScreenProps) => (
  <View style={styles.container}>
    <View style={styles.avatarBox}>
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
        <View style={styles.actionsBottom}>
          <View style={styles.buttons}>
            <Pressable style={styles.button}>
              <Feather
                name="users"
                size={20}
                color="black"
              />
            </Pressable>
            <Pressable style={styles.button}>
              <Feather
                name="zap"
                size={20}
                color="black"
              />
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
    <Sheet>
      <View style={styles.profile}>
        <View style={styles.profileHead}>
          <View>
            <View style={styles.stats}>
              <Ionicons
                name="ios-male"
                size={24}
                color="black"
              />
            </View>
            <Text style={styles.name}>Vincent</Text>
            <Text style={styles.breed}>Yorkshire Terrier</Text>
          </View>
          <View style={styles.locationBox}>
            <Octicons
              name="location"
              size={14}
              color="black"
            />
            <Text style={styles.location}>from Ukraine, Kharkiv</Text>
          </View>
        </View>
        <Characteristics data={profileCharacteristics} />
        <View style={styles.indicators}>
          <Indicator
            title="Happinness"
            value={75}
          />
          <Indicator
            title="Relationships"
            value={50}
          />
        </View>
      </View>
    </Sheet>
  </View>
)

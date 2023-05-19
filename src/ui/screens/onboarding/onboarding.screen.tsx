import { StyleSheet, Text, Pressable, Alert } from "react-native"
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons"
import Onboarding from "react-native-onboarding-swiper"

import { useOnboarding } from "~/utils/hooks"
import { type OnboardingProps } from "~/modules"

export const OnboardingScreen = ({ navigation }: OnboardingProps) => {
  const { complete } = useOnboarding()

  async function onPressStart() {
    await complete()
    navigation.navigate("Root")
  }

  return (
    <Onboarding
      onSkip={() => Alert.alert("Skipped")}
      pages={[
        {
          title: "Hey!",
          subtitle: "Vincent is your everyday pet routine helper",
          backgroundColor: "#003c8f",
          image: (
            <MaterialCommunityIcons
              name="human-greeting"
              size={100}
              color="white"
            />
          ),
        },
        {
          title: "Dog's Profile",
          subtitle: "Get deep analysis about your pet",
          backgroundColor: "#5e92f3",
          image: (
            <MaterialCommunityIcons
              name="dog"
              size={100}
              color="white"
            />
          ),
        },
        {
          title: "Get Hints",
          subtitle: "Reminders about walks, vaccinations, and other",
          backgroundColor: "#1565c0",
          image: (
            <Ionicons
              name="ios-notifications-circle"
              size={100}
              color="white"
            />
          ),
        },
        {
          title: "You're Ready",
          subtitle: (
            <Pressable
              onPress={onPressStart}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "rgb(215, 215, 215)" : "white",
                },
                styles.button,
              ]}
            >
              <Text style={{ fontSize: 16 }}>Start</Text>
            </Pressable>
          ),
          backgroundColor: "#003c8f",
          image: (
            <Ionicons
              name="ios-checkmark-circle"
              size={100}
              color="white"
            />
          ),
        },
      ]}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    minWidth: "80%",
    alignItems: "center",
    borderRadius: 30,
    padding: 20,
  },
})

import { Text, Pressable, Alert } from "react-native"
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons"
import Onboarding from "react-native-onboarding-swiper"

import { useOnboarding } from "~/utils/hooks"
import { type StackOnboardingProps } from "~/modules"
import { styles } from "./styles"

type OnboardingScreenProps = StackOnboardingProps

export const OnboardingScreen = ({ navigation }: OnboardingScreenProps) => {
  const { complete } = useOnboarding()

  async function onPressStart(): Promise<void> {
    await complete()
    navigation.navigate("Root")
  }

  function onPressSkip(): void {
    Alert.alert("Skipped")
  }

  return (
    <Onboarding
      onSkip={onPressSkip}
      pages={[
        {
          title: "Hey!",
          subtitle: "Vincent is your everyday pet routine helper",
          backgroundColor: "#FFA96A",
          image: (
            <MaterialCommunityIcons
              name="human-greeting"
              size={100}
              color="black"
            />
          ),
        },
        {
          title: "Dog's Profile",
          subtitle: "Get deep analysis about your pet",
          backgroundColor: "#FFA96A",
          image: (
            <MaterialCommunityIcons
              name="dog"
              size={100}
              color="black"
            />
          ),
        },
        {
          title: "Get Hints",
          subtitle: "Reminders about walks, vaccinations, and other",
          backgroundColor: "#FFA96A",
          image: (
            <Ionicons
              name="ios-notifications-circle"
              size={100}
              color="black"
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
                  backgroundColor: pressed ? "rgb(25, 25, 25)" : "black",
                },
                styles.button,
              ]}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: "white",
                  textTransform: "uppercase",
                }}
              >
                Start
              </Text>
            </Pressable>
          ),
          backgroundColor: "#FFA96A",
          image: (
            <Ionicons
              name="ios-checkmark-circle"
              size={100}
              color="black"
            />
          ),
        },
      ]}
    />
  )
}

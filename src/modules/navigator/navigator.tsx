import {
  type StackScreenProps,
  createStackNavigator,
} from "@react-navigation/stack"

import { Loader } from "~/ui/molecules"
import { OnboardingScreen } from "~/ui/screens"
import { useOnboarding } from "~/utils/hooks"
import { TabNavigator } from "~/modules"

type RootStackParams = {
  Onboarding: undefined
  Root: undefined
}

export type OnboardingProps = StackScreenProps<RootStackParams, "Onboarding">

const Stack = createStackNavigator<RootStackParams>()

export const Navigator = () => {
  const { isFirstLaunch, isLoading } = useOnboarding()

  if (isLoading || isFirstLaunch === null) {
    return <Loader />
  }

  return (
    <Stack.Navigator
      initialRouteName={isFirstLaunch ? "Onboarding" : "Root"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="Root"
        component={TabNavigator}
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  )
}

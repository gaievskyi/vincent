import { StatusBar } from "expo-status-bar"
import { Octicons, MaterialCommunityIcons } from "@expo/vector-icons"

import {
  type BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs"

import {
  type StackScreenProps,
  createStackNavigator,
} from "@react-navigation/stack"

import { Loader } from "~/ui/molecules"
import {
  OnboardingScreen,
  HomeScreen,
  ProfileScreen,
  SettingsScreen,
} from "~/ui/screens"
import { useOnboarding } from "~/utils/hooks"

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

type IconComponent = typeof Octicons | typeof MaterialCommunityIcons
type IconName = React.ComponentProps<IconComponent>["name"]

const icons: Record<keyof BottomTabsParams, TabIcon> = {
  Home: {
    iconName: "home",
    IconComponent: Octicons,
  },
  Profile: {
    iconName: "dog",
    IconComponent: MaterialCommunityIcons,
  },
  Settings: {
    iconName: "gear",
    IconComponent: Octicons,
  },
}

type TabIcon = {
  iconName: IconName
  IconComponent: IconComponent
}

type TabIconProps = {
  name: keyof BottomTabsParams
  color: string
  size: number
}

const TabIcon = ({ name, color, size }: TabIconProps) => {
  const { iconName, IconComponent } = icons[name]

  return (
    <IconComponent
      name={iconName as any}
      size={size}
      color={color}
    />
  )
}

type BottomTabsParams = {
  Home: undefined
  Profile: undefined
  Settings: undefined
}

export type HomeProps = BottomTabScreenProps<BottomTabsParams, "Home">
export type ProfileProps = BottomTabScreenProps<BottomTabsParams, "Profile">
export type SettingsProps = BottomTabScreenProps<BottomTabsParams, "Settings">

const Tab = createBottomTabNavigator<BottomTabsParams>()

export const TabNavigator = () => (
  <>
    <StatusBar style="dark" />
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "black",
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => (
          <TabIcon
            name={route.name}
            color={focused ? "black" : color}
            size={size}
          />
        ),
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  </>
)

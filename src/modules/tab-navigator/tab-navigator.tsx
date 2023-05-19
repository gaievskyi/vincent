import { Octicons, MaterialCommunityIcons } from "@expo/vector-icons"
import {
  type BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs"

import { HomeScreen, ProfileScreen, SettingsScreen } from "~/ui/screens"

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
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => (
        <TabIcon
          name={route.name}
          color={color}
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
)

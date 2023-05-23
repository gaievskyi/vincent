import { Button } from "react-native"

import { Center } from "~/ui/atoms"
import { type BottomTabSettingsProps } from "~/modules"

type SettingsScreenProps = BottomTabSettingsProps

export const SettingsScreen = ({ navigation }: SettingsScreenProps) => (
  <Center>
    <Button
      title="Home"
      onPress={() => navigation.navigate("Home")}
    />
  </Center>
)

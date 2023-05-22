import { Button } from "react-native"

import { Center } from "~/ui/atoms"
import { type SettingsProps } from "~/modules"

export const SettingsScreen = ({ navigation }: SettingsProps) => (
  <Center>
    <Button
      title="Home"
      onPress={() => navigation.navigate("Home")}
    />
  </Center>
)

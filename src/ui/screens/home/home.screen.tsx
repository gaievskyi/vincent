import { Button } from "react-native"

import { Center } from "~/ui/atoms"
import { type HomeProps } from "~/modules"

export const HomeScreen = ({ navigation }: HomeProps) => (
  <Center>
    <Button
      title="Profile"
      onPress={() => navigation.navigate("Profile")}
    />
    <Button
      title="Settings"
      onPress={() => navigation.navigate("Settings")}
    />
  </Center>
)

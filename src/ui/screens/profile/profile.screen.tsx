import { Button } from "react-native"

import { Center } from "~/ui/atoms"
import { type ProfileProps } from "~/modules"

export const ProfileScreen = ({ navigation }: ProfileProps) => (
  <Center>
    <Button
      title="Home"
      onPress={() => navigation.navigate("Home")}
    />
  </Center>
)

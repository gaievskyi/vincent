import { MaterialIcons } from "@expo/vector-icons"
import { FontAwesome5 } from "@expo/vector-icons"

export const profileCharacteristics = [
  { text: "5 years" },
  {
    text: "5kg",
    icon: (
      <FontAwesome5
        name="weight"
        size={18}
        color="black"
      />
    ),
  },
  {
    text: "27cm",
    icon: (
      <MaterialIcons
        name="height"
        size={18}
        color="black"
      />
    ),
  },
  { text: "Sterilized" },
  { text: "Good boy" },
  {
    text: "Fish-lover",
    icon: (
      <FontAwesome5
        name="fish"
        size={18}
        color="black"
      />
    ),
  },
]

export const image = {
  uri: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=100",
}

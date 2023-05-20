import { View, Text } from "react-native"

import { styles } from "./styles"

type CharacteristicProps = {
  icon: React.ReactNode
  text: string
}

const Characteristic = ({ icon, text }: CharacteristicProps) => (
  <View style={styles.characteristic}>
    {icon}
    <Text style={styles.characteristicValue}>{text}</Text>
  </View>
)

type CharacteristicsProps = {
  characteristics: CharacteristicProps[]
}

export const Characteristics = ({ characteristics }: CharacteristicsProps) => (
  <View style={styles.characteristics}>
    {characteristics.map((c, index) => (
      <Characteristic
        key={index}
        icon={c.icon}
        text={c.text}
      />
    ))}
  </View>
)

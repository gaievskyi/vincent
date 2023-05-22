import { View, Text } from "react-native"

import { styles } from "./styles"

type CharacteristicProps = {
  text: string
  icon?: React.ReactNode
}

const Characteristic = ({ text, icon }: CharacteristicProps) => (
  <View style={styles.characteristic}>
    {icon}
    <Text style={styles.characteristicValue}>{text}</Text>
  </View>
)

type CharacteristicsProps = {
  data: CharacteristicProps[]
}

export const Characteristics = ({ data }: CharacteristicsProps) => (
  <View style={styles.characteristics}>
    {data.map((c, index) => (
      <Characteristic
        key={index}
        icon={c.icon}
        text={c.text}
      />
    ))}
  </View>
)

import { View, Text } from "react-native"

import { styles } from "./styles"

type IndicatorProps = {
  title: string
  value: number
}

export const Indicator = ({ title, value }: IndicatorProps) => (
  <View style={styles.indicatorBox}>
    <View style={styles.indicatorHead}>
      <Text>{title}</Text>
      <Text style={styles.indicatorValue}>{value}</Text>
    </View>
    <View style={styles.indicatorOuter}>
      <View style={{ ...styles.indicator, width: value + "%" }} />
    </View>
  </View>
)

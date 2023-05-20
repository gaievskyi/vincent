import { View, Text } from "react-native"

import { styles } from "./styles"

type IndicatorProps = {
  title: string
  value: string
  width: string
}

export const Indicator = ({ title, value, width }: IndicatorProps) => (
  <View style={styles.indicatorBox}>
    <View style={styles.indicatorHead}>
      <Text>{title}</Text>
      <Text style={styles.indicatorValue}>{value}</Text>
    </View>
    <View style={styles.indicatorOuter}>
      <View style={{ ...styles.indicator, width }} />
    </View>
  </View>
)

import { NavigationContainer as NavigationProvider } from "@react-navigation/native"
import { Navigator } from "~/modules"

export const App = () => (
  <NavigationProvider>
    <Navigator />
  </NavigationProvider>
)

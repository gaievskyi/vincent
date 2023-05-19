import { ActivityIndicator } from "react-native"
import { Center } from "~/ui/atoms"

type LoaderProps = {
  when?: boolean
}

export const Loader = ({ when = true }: LoaderProps) => (
  <>
    {when && (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    )}
  </>
)

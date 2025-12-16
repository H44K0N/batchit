import { TamaguiProvider, YStack, Text } from 'tamagui'
import { useColorScheme } from 'react-native'
import { tamaguiConfig } from './tamagui.config'

export default function App() {
  const scheme = useColorScheme()
  const defaultTheme = scheme === 'dark' ? 'dark' : 'light'

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={defaultTheme}>
      <YStack f={1} jc="center" ai="center" p="$4">
        <Text fontSize={20}>Tamagui is working ✅</Text>
      </YStack>
    </TamaguiProvider>
  )
}

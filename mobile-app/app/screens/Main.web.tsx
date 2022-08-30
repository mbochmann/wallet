import { NavigationContainer } from '@react-navigation/native'
import { Theme } from '@react-navigation/native/lib/typescript/src/types'

import { StyleSheet, View } from 'react-native'
import { getDefaultTheme } from '@constants/Theme'
import { useThemeContext } from '@shared-contexts/ThemeProvider'
import { tailwind } from '@tailwind'
import { PlaygroundNavigator } from './PlaygroundNavigator/PlaygroundNavigator'
import { RootNavigator } from './RootNavigator'
import { EnvironmentName, getEnvironment } from '@environment'
import { getReleaseChannel } from '@api/releaseChannel'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { getDefaultThemeV2 } from '@constants/ThemeV2'
import { useFeatureFlagContext } from '@contexts/FeatureFlagContext'

export function Main (): JSX.Element {
  const env = getEnvironment(getReleaseChannel())
  const { isLight } = useThemeContext()
  const DeFiChainTheme: Theme = getDefaultTheme(isLight)
  const DeFiChainThemeV2: Theme = getDefaultThemeV2(isLight)
  const { isFeatureAvailable } = useFeatureFlagContext()

  return (
    <SafeAreaProvider>
      <View style={tailwind('flex-row flex-1 justify-center items-center bg-black flex-shrink-0')}>
        <View style={[styles.phone,tailwind('flex-grow-0')]}>
          <RootNavigator />
        </View>

        {env.name !== EnvironmentName.Production && (
          <View style={[styles.phone, tailwind('bg-white ml-2')]}>
            <NavigationContainer theme={isFeatureAvailable('onboarding_v2') ? DeFiChainThemeV2 : DeFiChainTheme}>
              <PlaygroundNavigator />
            </NavigationContainer>
          </View>
        )}
      </View>
    </SafeAreaProvider>
  )
}

/**
 * iPhone 8 Size
 */
const styles = StyleSheet.create({
  phone: {
    height: "100%",
    width: "100%"
  }
})

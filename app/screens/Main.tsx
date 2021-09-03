import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useThemeContext } from '../contexts/ThemeProvider'
import { RootNavigator } from './RootNavigator'

export function Main (): JSX.Element {
  const { isLight } = useThemeContext()
  return (
    <SafeAreaProvider>
      <RootNavigator />

      <StatusBar style={isLight ? 'dark' : 'light'} />
    </SafeAreaProvider>
  )
}

import { Stack } from 'expo-router'
import { View } from 'react-native'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <NavBar />
      <Stack />
      <Footer />
    </View>
  )
}

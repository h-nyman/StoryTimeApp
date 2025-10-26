import { Stack } from "expo-router";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { Text, View } from 'react-native';

export default function RootLayout() {
  // State management for splash screen. Hide it after 1 second.
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsReady(true)
    }, 1000);
  }, [])

  // Show splash screen until app is ready.
  if (!isReady) {
    return <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Text>Welcome to Movie Search</Text>
    </View>
  }

  return <RootNavigator />
}

function RootNavigator() {
  const [user, setUser] = useState<null|User>(null);
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, setUser);

    return unsubscribe;
  }, [])

  return <Stack screenOptions={{
    headerShown: false
  }}>
    <Stack.Protected guard={!!user}>
      <Stack.Screen name="(app)" />
    </Stack.Protected>

    <Stack.Protected guard={!user}>
      <Stack.Screen name="(auth)/index" />
    </Stack.Protected>
  </Stack>
}
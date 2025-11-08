import { Stack } from "expo-router";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";

export default function RootLayout() {
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
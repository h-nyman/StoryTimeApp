import { auth } from "@/firebaseConfig";
import { Stack } from "expo-router";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";

export default function RootLayout() {
  return <RootNavigator />
}

function RootNavigator() {
  const [user, setUser] = useState<null|User>(null);
  useEffect(() => {
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
      <Stack.Screen name="(auth)" />
    </Stack.Protected>
  </Stack>
}
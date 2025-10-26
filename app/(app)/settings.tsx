import { getAuth, signOut } from "firebase/auth";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Home() {
  const auth = getAuth()
  return (
    <View style={styles.container}>
      <View style={styles.profileBox}>
        <Text style={styles.label}>User e-mail:</Text>
        <Text style={styles.email}>{auth.currentUser?.email}</Text>
      </View>
      <View style={styles.signOutButton}>
        <Button title="Sign out" onPress={() => signOut(auth)}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    backgroundColor: "#f5f5f5",
  },
  profileBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    color: "#888",
  },
  email: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: 5,
  },
  signOutButton: {
    marginTop: 10,
  }
});
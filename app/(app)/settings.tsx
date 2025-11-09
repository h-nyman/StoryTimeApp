import { getAuth, signOut } from "firebase/auth";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const auth = getAuth()
  return (
    <View style={styles.container}>
      <View style={styles.profileBox}>
        <Text style={styles.label}>User e-mail:</Text>
        <Text style={styles.email}>{auth.currentUser?.email}</Text>
      </View>
      <TouchableOpacity
        style={styles.signOutButton}
        onPress={() => signOut(auth)}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  profileBox: {
    backgroundColor: "#FFFFFF",
    padding: 25,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
    shadowColor: "#3D5A80",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
    marginBottom: 40,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3D5A80",
    marginBottom: 8,
  },

  email: {
    fontSize: 18,
    fontWeight: "500",
    color: "#293241",
  },

  signOutButton: {
    backgroundColor: "#3D5A80",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});
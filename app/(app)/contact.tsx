import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.aboutText}>StoryTime is an app designed to bring imagination to life.
        With the power of AI, you can create vivid images from simple text prompts; perfect for storytelling, creative projects, or when you just need a spark of inspiration.
        Whether you are reading to children, designing a scene, or exploring ideas, StoryTime makes it easy to visualize your stories.</Text>

      <View style={styles.contactBox}>
        <Text style={styles.contactLabel}>Contact</Text>
        <Text style={styles.contactEmail}>email@example.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  aboutText: {
    fontSize: 16,
    color: "#293241",
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 50,
  },

  contactBox: {
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
  },

  contactLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3D5A80",
    marginBottom: 8,
  },

  contactEmail: {
    fontSize: 18,
    color: "#293241",
    fontWeight: "500",
  },
});
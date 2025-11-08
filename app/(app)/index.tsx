import { ai } from "@/firebaseConfig";
import { getImagenModel } from "firebase/ai";
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Home() {
  const [storyPrompt, setStoryPrompt] = useState("")
  const [image, setImage] = useState("")
  const generateImage = async () => {
    console.log()
    const model = getImagenModel(ai, { model: "imagen-4.0-fast-generate-001" });
    // To generate an image, call `generateImages` with the text prompt
    const response = await model.generateImages(storyPrompt)

    // If fewer images were generated than were requested,
    // then `filteredReason` will describe the reason they were filtered out
    if (response.filteredReason) {
      console.log(response.filteredReason);
    }

    if (response.images.length === 0) {
      throw new Error("No images in the response.")
    }

    const generatedImage = response.images[0];
    setImage(`data:${generatedImage.mimeType};base64,${generatedImage.bytesBase64Encoded}`)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What do you want to see?</Text>
      <TextInput style={styles.input} value={storyPrompt} onChangeText={setStoryPrompt} placeholder="Type your idea..."></TextInput>
      <TouchableOpacity style={styles.button} onPress={generateImage}>
        <Text style={styles.buttonText}>Generate</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={{ uri: image }} resizeMode="contain"></Image>
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

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#293241",
    marginBottom: 20,
    textAlign: "center",
  },

  input: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#3D5A80",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
    marginBottom: 30,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },

  image: {
    height: 300,
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
});

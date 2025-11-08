import { ai } from "@/firebaseConfig";
import { getImagenModel } from "firebase/ai";
import { useState } from "react";
import { Button, Image, StyleSheet, TextInput, View } from "react-native";


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
      <TextInput style={styles.input} value={storyPrompt} onChangeText={setStoryPrompt}></TextInput>
      <Button title="Generate" onPress={generateImage}></Button>
      <Image style={{height: 300}} source={{ uri: image }} resizeMode="contain"></Image>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    gap: 10
  },
  list: {
    marginTop: 10
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
  },
  movieItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15
  },
  poster: {
    width: 50,
    height: 75,
    marginRight: 10
  },
  pagetitle: {
    fontSize: 20,
    fontWeight: "600",
    paddingBottom: 20
  },
  title: {
    fontSize: 16,
    fontWeight: "500"
  },
});

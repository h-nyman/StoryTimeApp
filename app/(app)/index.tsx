import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";


export default function Home() {
  const [storyPrompt, setStoryPrompt]= useState("")
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={storyPrompt} onChangeText={setStoryPrompt}></TextInput>
    <Button title="Generate"></Button></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  list: {
    marginTop: 10
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10
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

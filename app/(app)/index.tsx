import { useState } from "react";
import { Button, FlatList, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { searchMovies } from "../../services/omdb";


export default function Home() {
  type Movie = {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
  };
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Movie[]>([]);

  const handleSearch = async () => {
    const movies = await searchMovies(query);
    setResults(movies);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pagetitle}>Search for a movie</Text>
      <TextInput
        style={styles.input}
        placeholder="Movie name..."
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={handleSearch} />

      <FlatList
        data={results}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
            <Image source={{ uri: item.Poster }} style={styles.poster} />
            <Text style={styles.title}>{item.Title} ({item.Year})</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
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
    padding: 20
  },
  title: {
    fontSize: 16,
    fontWeight: "500"
  },
});

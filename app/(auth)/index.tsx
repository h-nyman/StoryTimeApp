import { Link } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Story Time!</Text>
            <View style={styles.buttonContainer}>
                <Link href="(auth)/login" asChild>
                    <View style={styles.button}>
                        <Button title="Sign In" />
                    </View>
                </Link>

                <Link href="(auth)/register" asChild>
                    <View style={styles.button}>
                        <Button title="Register" />
                    </View>
                </Link>
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
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
        textAlign: "center",
    },
    buttonContainer: {
        marginTop: 20,
    },
    button: {
        marginVertical: 8,
    },
});
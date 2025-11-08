import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.title}>Welcome to Story Time!</Text>
            </View>

            <View style={styles.bottomSection}>
                <View style={styles.buttonContainer}>
                    <Link href="./login" asChild>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>
                    </Link>

                    <Link href="./register" asChild>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    topSection: {
        flex: 1,
        backgroundColor: "#3D5A80",
        justifyContent: "center",
        alignItems: "center",
    },

    bottomSection: {
        flex: 3,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30,
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#FFFFFF",
        textAlign: "center",
    },

    buttonContainer: {
        width: "80%",
        alignItems: "center",
        marginBottom: 30,
    },

    button: {
        backgroundColor: "#3D5A80",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 10,
        width: "100%",
        alignItems: "center",
    },

    buttonText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "600",
    },
});
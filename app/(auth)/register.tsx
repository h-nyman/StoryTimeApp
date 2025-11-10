import { auth } from "@/firebaseConfig";
import { Link } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function createUser(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("logged in user: ", user.email)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode + " " + errorMessage)
        });
}

export default function RegisterScreen() {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.title}>Register New User</Text>
            </View>

            <View style={styles.bottomSection}>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>E-mail:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeEmail}
                        value={email}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholder="Enter your email"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Password:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangePassword}
                        value={password}
                        secureTextEntry={true}
                        placeholder="Enter your password"
                        placeholderTextColor="#999"
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => createUser(email, password)}
                    >
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>

                    <Text style={styles.bottomText}>Already have an account?</Text>
                    <Link href="./login" asChild>
                        <TouchableOpacity style={styles.linkButton}>
                            <Text style={styles.linkText}>Log in here</Text>
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

    formContainer: {
        width: "85%",
    },

    label: {
        fontSize: 16,
        marginBottom: 5,
        color: "#293241",
    },

    input: {
        height: 45,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: "#FFFFFF",
    },

    button: {
        backgroundColor: "#3D5A80",
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20,
    },

    buttonText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "600",
    },

    bottomText: {
        fontSize: 16,
        color: "#293241",
        textAlign: "center",
    },

    linkButton: {
        marginTop: 10,
        paddingVertical: 8,
    },

    linkText: {
        color: "#3D5A80",
        fontWeight: "bold",
        textAlign: "center",
    },
});

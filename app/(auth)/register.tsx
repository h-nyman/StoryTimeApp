import { auth } from "@/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

function createUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

export default function Index() {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register new user</Text>

            <Text style={styles.label}>E-mail:</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="Enter your email"
            />
            <Text style={styles.label}>Password:</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                secureTextEntry={true}
                placeholder="Enter your password"
            />
            <Button title="Register" onPress={() => createUser(email, password)} />
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
        marginBottom: 30,
        textAlign: "center",
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: "#fff",
    },
});

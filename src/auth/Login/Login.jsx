import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Email/phone number'
                    placeholderTextColor="#bbb"
                    cursorColor="#222124"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Enter Password'
                    placeholderTextColor="#bbb"
                    cursorColor="#222124"
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.textStyle}>
                        Don't have an account? SignUp
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        width: 300,
        height: 350,
        borderRadius: 10,
        backgroundColor: "#efefef",
        paddingHorizontal: 16,
        paddingVertical: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 35,
        color: "skyblue",
        fontWeight: "700",
        marginBottom: 25,
        alignSelf: "center"
    }
    ,
    input: {
        borderWidth: 0.8,
        borderColor: "#222124b3",
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 4,
        backgroundColor: "transparent",
        marginBottom: 25
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 10,
        alignItems: "center",
        borderWidth: 0.8,
        borderColor: "skyblue",
        backgroundColor: "skyblue",
        borderRadius: 4,
        marginBottom: 10
    },
    loginText: {
        fontSize: 20,
        fontWeight: "700",
        color: "#fff"
    },
    textStyle: {
        fontSize: 14,
        fontWeight: "700",
        color: "orange",
        alignSelf: "center"
    }
})
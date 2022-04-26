import { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";
import Title from "../components/Title";
import { color } from "../common";
import PrimaryButton from "../components/PrimaryButton";
import Box from "../components/Box";
const StartGameScreen = ({ setNumberGuessed }) => {
    const [number, setNumber] = useState("");
    const checkNumber = () => {
        if (isNaN(number) || number === "" || number < 1 || number > 99) {
            Alert.alert(
                "Warning !",
                "Select Valid Number",
                [
                    { text: "OK", onPress: () => setNumber("") }
                ]
            );
            return;
        }
        setNumberGuessed({
            isGuessed: true,
            number: number
        });
    }
    const cancel = () => {
        setNumber("")
    }
    return (
        <>
            <Title>Guess The Number</Title>
            <Box>
                <View style={styles.container}>
                    <View style={styles.textinputContainer}>
                        <TextInput
                            maxLength={2}
                            keyboardType="number-pad"
                            style={styles.textinput}
                            onChangeText={setNumber}
                            value={number}
                            autoFocus={true}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={cancel}>Cancel</PrimaryButton>
                        <PrimaryButton onPress={checkNumber}>Guess</PrimaryButton>
                    </View>
                </View>
            </Box>
        </>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textinputContainer: {
        justifyContent: "center",
        margin: 10,
    },
    textinput: {
        borderBottomColor: color.yellowLight,
        borderBottomWidth: 1,
        fontSize: 24,
        color: color.yellowLight,
        textAlign: "center"
    },
    buttonContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    }
})
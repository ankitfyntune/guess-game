import { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native"
import Box from "../components/Box";
import Title from "../components/Title";
import { color } from "../common";
import PrimaryButton from "../components/PrimaryButton";
const GameScreen = ({ numberGuessed, setNumberGuessed }) => {
    const [dice, setDice] = useState();
    const [counter, setCounter] = useState(1);
    const rollTheDice = () => {
        setDice(dice => String(Math.floor(Math.random()*98+1)));
        setCounter(counter => counter+1);
    }
    useEffect(() => {
        if(Boolean(dice) && counter <=3 && Number(dice) === Number(numberGuessed?.number)) {
            Alert.alert(
                "You Won",
                "Number Matched",
                [
                    { text: "Play Again", onPress: () => setNumberGuessed({
                        isGuessed: false,
                        number: 0
                    }) }
                ]
            );
        } else if(counter > 3) {
            Alert.alert(
                "You Loss",
                "Number Not Matched",
                [
                    { text: "Play Again", onPress: () => setNumberGuessed({
                        isGuessed: false,
                        number: 0
                    }) }
                ]
            );
        }
    },[dice,counter])
    return (
        <>
            <Title>Roll The Dice</Title>
            <Box>
                <View style={styles.container}>
                    <View style={styles.textinputContainer}>
                        <TextInput
                            editable={false}
                            selectTextOnFocus={false}
                            style={styles.textinput}
                            value={dice}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={rollTheDice}>Roll</PrimaryButton>
                    </View>
                </View>
            </Box>
        </>
    );
}

export default GameScreen;

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
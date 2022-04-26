import { Pressable, Text, StyleSheet } from "react-native";
import { color } from "../common";

const PrimaryButton = ({children,onPress}) => {
    return ( 
        <Pressable onPress={onPress} style={({pressed}) => pressed?[styles.PrimaryButton, styles.opacity]:styles.PrimaryButton}>
            <Text>{children}</Text>
        </Pressable>
     );
}
 
export default PrimaryButton;

const styles = StyleSheet.create({
    PrimaryButton: {
        width: "45%",
        flexDirection: "row",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 25,
        elevation: 4,
        backgroundColor: color.yellowLight,
        color: color.sunset,
        paddingVertical: 5,
        paddingHorizontal: 20,
        marginHorizontal: 15
    },
    opacity: {
        opacity: 0.5
    }
})
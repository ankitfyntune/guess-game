import { View, Text, StyleSheet } from "react-native";
import { color } from "../common";
const Title = ({ children }) => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{children}</Text>
        </View>
    );
}

export default Title;

const styles = StyleSheet.create({
    titleContainer: {
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 20,
        borderWidth: 5,
        borderColor: color.sunsetLight,
        borderRadius: 10
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        color: color.sunset
    }
});
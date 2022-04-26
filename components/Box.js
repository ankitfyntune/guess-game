import { View, StyleSheet, TextInput } from "react-native";
import { color } from "../common";

const Box = (props) => {
    return ( 
        <View style={styles.box}>
            {props.children}
        </View>
     );
}
 
export default Box;

const styles = StyleSheet.create({
    box: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        backgroundColor: "orange",
        elevation: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,
    }
})
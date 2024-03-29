import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "../Global/Colors";


const AddButon = ({
    title = "",
    onPress = () => {},
    color = colors.cyanBeltive,
}) => {
    return (
        <Pressable
            style={{ ...styles.button, backgroundColor: color }}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default AddButon;

const styles = StyleSheet.create({
    button: {
        width: "80%",
        borderWidth: 1,
        backgroundColor: colors.pink,
        justifyContent: "center",
        alignItems: "center",
        padding: 8
    },
    text: {
        fontSize: 18,
        color: colors.blueBeltive,
    },
});
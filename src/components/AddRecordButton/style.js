import { StyleSheet, Platform } from "react-native";
import { globalColor, globalStyle, globalEffect } from "../../global/style";

export const style = StyleSheet.create({
    container: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: 60,
        height: 60,
        textAlign: "center",
        borderRadius: 50,
        backgroundColor: globalColor.expenseColor,
        bottom: 40,
        zIndex: 5,
        ...globalEffect.cardShadow
    },
})
import { StyleSheet } from "react-native";
import { globalColor } from "../../global/style";

export const style = StyleSheet.create({
    container: {
        zIndex: 10,
        width: "100%",
        height: "100%",
        backgroundColor: globalColor.inverseColor,
        position: "absolute",
        left: 0,
        top: 0
    }
})
import { StyleSheet } from "react-native";
import { globalColor, globalFont } from "../../global/style";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        textAlign: "center"
    },
    overview: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    expense: {
        color: globalColor.expenseColor,
        fontSize: globalFont.size.general,
        fontWeight: globalFont.weight.heavy
    },
    income: {
        color: globalColor.incomeColor,
        fontSize: globalFont.size.general,
        fontWeight: globalFont.weight.heavy
    }
});
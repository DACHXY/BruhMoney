import { StyleSheet } from "react-native";
import { globalColor, globalStyle } from "../../global/style";

export const style = StyleSheet.create({
    container: {
        backgroundColor: globalColor.decorationColor,
        borderStyle: "solid",
        borderColor: globalColor.decorationColor,
        borderWidth: 2,
        borderRadius: 4,
        marginHorizontal: 20,
        paddingVertical: 4,
        paddingHorizontal: 10
    },
    dateGroupRecordItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        height: 50,
        borderWidth: 1,
        paddingHorizontal: 4,
    },
    dateGroupRecordItemName: {
        ...globalStyle.MediumFont
    },
    dateGroupRecordItemPrice: {
        ...globalStyle.MediumFont
    },
    dateGroupRecordContainer: {
        backgroundColor: "red"
    },
    divider: {
        backgroundColor: globalColor.inverseColor,
        borderRadius: 4,
        height: 2,
        marginVertical: 4
    },
    dateGroupHeader: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    dateGroupHeaderDate: {
        ...globalStyle.LargeFont,
    },
    dateGroupHeaderPrice: {
        ...globalStyle.LargeFont,
    }
})
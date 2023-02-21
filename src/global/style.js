import { StyleSheet } from "react-native";

// Theme
const currentTheme = "dark";

// Color Theme
const Theme = {
    light : {
        mainColor: "#ffffff",
        decorationColor: "#ECF9FF",
        expenseColor: "#ffc104",
        incomeColor: "#8DCBE6",
        inverseColor: "#202020",
    },
    dark: {
        mainColor: "#202020",
        decorationColor: "#2f2f2f",
        expenseColor: "#ffc104",
        incomeColor: "#8DCBE6",
        inverseColor: "#fff"
    },
    test: {
        mainColor: "#2C3333",
        decorationColor: "#395B64",
        expenseColor: "#A5C9CA",
        incomeColor: "#E7F6F2",
        inverseColor: "#fff"
    }
}

export const globalColor = Theme[currentTheme]

// Font
export const globalFont = {
    size: {
        general: 14,
        small : 12,
        medium: 16,
        large: 18
    },
    weight: {
        light: "400",
        medium: "500",
        heavy: "600"
    }
} 

// Style
export const globalStyle = StyleSheet.create({
    container:{
        flex: 1,
        alignContent: "center",
        backgroundColor: globalColor.mainColor
    },
    LargeFont: {
        color: globalColor.inverseColor,
        fontSize: globalFont.size.large,
        fontWeight: globalFont.weight.heavy
    },
    MediumFont: {
        color: globalColor.inverseColor,
        fontSize: globalFont.size.medium,
        fontWeight: globalFont.weight.heavy
    },
    generalFont: {
        color: globalColor.inverseColor,
        fontSize: globalFont.size.general,
        fontWeight: globalFont.weight.medium
    },
    smallFont: {
        color: globalColor.inverseColor,
        fontSize: globalFont.size.small,
        fontWeight: globalFont.weight.medium
    },
    navBarHeaderTitleStyle: {
        color: globalColor.inverseColor,
    },
    navBarHeaderStyle: {
        backgroundColor: globalColor.mainColor,
    }
});


export const globalEffect = StyleSheet.create({
    cardShadow: {
        shadowColor: '#000',  
        // ios
        shadowOffset: {width: 0,height: 0},  
        shadowOpacity: 1,
        shadowRadius: 1,  

        //android
        elevation: 6,
    }
})
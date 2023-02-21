import { View, Text } from "react-native";
import { style } from "./style";

function PopUpPage({ children }) {
    return (
        <View style={style.container}>
            <Text>Here is pop up!!!</Text>
            {children}
        </View>
    )
}

export default PopUpPage;
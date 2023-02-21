import { Text, Animated, TouchableWithoutFeedback, useWindowDimensions } from "react-native";
import { style } from "./style";
import { globalColor } from "../../global/style";
import Icon from 'react-native-vector-icons/Entypo'

function AddRecordButton ({onPress}) {
    const { height, width } = useWindowDimensions();
    const animatedButtonScale = new Animated.Value(1);
    const animatedScaleStyle = {
        transform: [{scale: animatedButtonScale}]
    };

    function AddButtonOnPressIn() {
        Animated.spring(animatedButtonScale, {
            toValue: 1.2,
            useNativeDriver: true,
        }).start()
    }
    function AddButtonOnPressOut() {
        Animated.spring(animatedButtonScale, {
            toValue: 1,
            useNativeDriver: true,
        }).start()
    }
    
    return (
        <TouchableWithoutFeedback 
        onPress={onPress} 
        onPressIn={AddButtonOnPressIn}
        onPressOut={AddButtonOnPressOut}
        >
            <Animated.View style={[{right: width/2 - 30} ,animatedScaleStyle, style.container ]}>
                <Icon name="plus" size={46} color={globalColor.inverseColor}/>
            </Animated.View>
        </TouchableWithoutFeedback >
    )
}

export default AddRecordButton;
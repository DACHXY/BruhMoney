import { Text, View, TouchableOpacity } from 'react-native';
import { style } from './style';
import { globalStyle, globalColor } from '../../global/style';
import RecordColumn from '../../components/RecordColumn';
import AddRecordButton from "../../components/AddRecordButton";
import { DrawerName } from '../../navigation/main';

const DummyData = {
    expense: 10,
    income: 44
}

function HomePage({ navigation }) {
    function AddButtonOnPress() {
        navigation.navigate(DrawerName.setting)
    }
    return (
        <View
            style={[globalStyle.container, style.container]}
            contentInsetAdjustmentBehavior='automatic'
        >
            <AddRecordButton onPress={AddButtonOnPress} />
            <View style={style.overview}>
                <View>
                    <Text style={style.expense}>月支出</Text>
                    <Text style={globalStyle.generalFont}>{`$${DummyData.expense}`}</Text>
                </View>
                <View>
                    <RecordColumn />
                </View>
            </View>
            <View style={{ flexDirection: 'column', backgroundColor: "red" }}>
                <RecordColumn />
            </View>
        </View>
    )
}

export default HomePage;
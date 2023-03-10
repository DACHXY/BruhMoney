import { Text, View, TouchableOpacity } from 'react-native';
import { style } from './style';
import { globalStyle, globalColor } from '../../global/style';
import RecordColumn from '../../components/recordColumn';
import AddRecordButton from "../../components/addRecordButton";
import { DrawerName } from '../../navigation/main';

const DummyData = {
    expense: 10,
    income: 44
}

function HomePage({ navigation }) {
    function AddButtonOnPress() {
        console.log("Add button Pressed!")
        navigation.push(DrawerName.addRecord)
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
                    <Text style={style.income}>月收入</Text>
                    <Text style={globalStyle.generalFont}>{`$${DummyData.income}`}</Text>
                </View>
            </View>
            <View>
                <RecordColumn />
            </View>
        </View>
    )
}

export default HomePage;
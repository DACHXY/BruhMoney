import { Text, View, ScrollView } from 'react-native';
import { style } from './style'; 
import { globalStyle, globalColor } from '../../global/style';
import RecordColumn from '../../components/RecordColumn';

const DummyData = {
    expense: 10,
    income: 44
}

function HomePage () {
    const containerMix = {...globalStyle.container, ...style.container};
    return (
        <ScrollView 
            style={containerMix}
            contentInsetAdjustmentBehavior='automatic'
        >
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
                <RecordColumn/>
            </View>
        </ScrollView>
    )
}

export default HomePage;
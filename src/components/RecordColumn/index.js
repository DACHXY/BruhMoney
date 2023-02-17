import { View, Text, TouchableOpacity, useWindowDimensions  } from "react-native";
import { globalColor, globalEffect, globalStyle } from "../../global/style";
import { style } from "./style";
import { NestableScrollContainer, NestableDraggableFlatList, ScaleDecorator } from "react-native-draggable-flatlist"
import { useState } from "react";


const DummyData = {
    owner: "DACHXY",
    timeLength: "2y",
    data: [
        {
            id: 1,
            date: "2022-10-13",
            records: [
                {
                    id: 1,
                    sequence: 1,
                    name: "早餐",
                    price: -100,
                    type: "expense",
                    currency: "NTD",
                    recordTime: "10:13",
                    comment: "這是一頓普通的早餐"
                },
                {
                    id: 2,
                    sequence: 2,
                    name: "月收入",
                    price: 1000,
                    type: "income",
                    currency: "NTD",
                    recordTime: "10:14",
                    comment: "這是一頓普通的早餐"
                }
            ]
        },
        {
            id: 2,
            date: "2022-10-12",
            records: [
                {
                    id: 1,
                    sequence: 1,
                    name: "早餐",
                    price: -100,
                    type: "expense",
                    currency: "NTD",
                    recordTime: "10:13",
                    comment: "這是一頓普通的早餐"
                },
                {
                    id: 2,
                    sequence: 2,
                    name: "月收入",
                    price: 1000,
                    type: "income",
                    currency: "NTD",
                    recordTime: "10:14",
                    comment: "這是一頓普通的早餐"
                }
            ]
        },
        {
            id: 3,
            date: "2022-10-12",
            records: [
                {
                    id: 1,
                    sequence: 1,
                    name: "早餐",
                    price: -100,
                    type: "expense",
                    currency: "NTD",
                    recordTime: "10:13",
                    comment: "這是一頓普通的早餐"
                },
                {
                    id: 2,
                    sequence: 2,
                    name: "月收入",
                    price: 1000,
                    type: "income",
                    currency: "NTD",
                    recordTime: "10:14",
                    comment: "這是一頓普通的早餐"
                }
            ]
        },
        {
            id: 4,
            date: "2022-10-12",
            records: [
                {
                    id: 1,
                    sequence: 1,
                    name: "早餐",
                    price: -100,
                    type: "expense",
                    currency: "NTD",
                    recordTime: "10:13",
                    comment: "這是一頓普通的早餐"
                },
                {
                    id: 2,
                    sequence: 2,
                    name: "月收入",
                    price: 1000,
                    type: "income",
                    currency: "NTD",
                    recordTime: "10:14",
                    comment: "這是一頓普通的早餐"
                }
            ]
        },
        {
            id: 5,
            date: "2022-10-12",
            records: [
                {
                    id: 1,
                    sequence: 1,
                    name: "早餐",
                    price: -100,
                    type: "expense",
                    currency: "NTD",
                    recordTime: "10:13",
                    comment: "這是一頓普通的早餐"
                },
                {
                    id: 2,
                    sequence: 2,
                    name: "月收入",
                    price: 1000,
                    type: "income",
                    currency: "NTD",
                    recordTime: "10:14",
                    comment: "這是一頓普通的早餐"
                }
            ]
        }
    ]
}

function Divider () {
    return (
        <View style={style.divider}/>
    )
}

function DateGroupItem({data}) {
    return (
        <View style={style.dateGroupRecordItem}>
            <Text style={style.dateGroupRecordItemName}>{data.name}</Text>
            <Text style={style.dateGroupRecordItemPrice}>{`$${data.price}`}</Text>
        </View>
    )
}

function DateGroup ({data}) {
    const [listData, setListData] = useState(data.records)
    
    const renderItem = ({item, drag, isActive}) => {
        return (
            <ScaleDecorator activeScale={1.03}>
                <TouchableOpacity
                    onLongPress={drag}
                    disabled={isActive}
                    style={[
                        isActive ? {backgroundColor : globalColor.decorationColor} : null,
                        isActive ? globalEffect.cardShadow : null,
                        isActive ? {zIndex: 4} : null,
                    ]}
                >	
                    <DateGroupItem data={item}/>
                </TouchableOpacity>
            </ScaleDecorator>
        )
    }
    const dailySum = listData.reduce((accum , item) => {
        return accum + item.price
    }, 0)
    const isExpenseMore = dailySum < 0;
    const dailySumStyle ={
        ...style.dateGroupHeaderPrice,
        color: isExpenseMore ? globalColor.expenseColor : globalColor.incomeColor
    }

    return (
        <View style={style.container}>
            <View style={style.dateGroupHeader}>
                <Text style={style.dateGroupHeaderDate}>{data.date}</Text>
                <Text style={dailySumStyle}>{`$${dailySum}`}</Text>
            </View>
            <Divider/>
            <NestableDraggableFlatList
                data={listData? listData : []}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                onDragEnd={( {data} ) => {
                    setListData(data)
                }}
                >
            </NestableDraggableFlatList>
        </View>
    )
}

function RecordColumn () {
    return (
        <NestableScrollContainer style={{backgroundColor: "green", marginBottom: 78}}>
            {DummyData.data.map(x => <DateGroup key={x.id} data={x}/>)}
        </NestableScrollContainer>
    )
};

export default RecordColumn;
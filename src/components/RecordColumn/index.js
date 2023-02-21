import { View, Text } from "react-native";
import { globalColor, globalStyle } from "../../global/style";
import { style } from "./style";
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
                    recordTime: "10:13",
                    comment: "這是一頓普通的早餐"
                }
            ]
        }
    ]
}

function Divider() {
    return (
        <View style={style.divider} />
    )
}

function DateGroupItem({ data }) {
    return (
        <View style={style.dateGroupRecordItem}>
            <Text style={style.dateGroupRecordItemName}>{data.name}</Text>
            <Text style={style.dateGroupRecordItemPrice}>{`$${data.price}`}</Text>
        </View>
    )
}

function DateGroup({ data }) {
    const dailySum = data.records.reduce((accum, item) => {
        return accum + item.price
    }, 0)
    const isExpenseMore = dailySum < 0;
    const dailySumStyle = {
        ...style.dateGroupHeaderPrice,
        color: isExpenseMore ? globalColor.expenseColor : globalColor.incomeColor
    }

    return (
        <View style={style.container}>
            <View style={style.dateGroupHeader}>
                <Text style={style.dateGroupHeaderDate}>{data.date}</Text>
                <Text style={dailySumStyle}>{`$${dailySum}`}</Text>
            </View>
            <Divider />
            <View style={style.dateGroupRecordContainer}>
                {data.records.map(x => <DateGroupItem key={x.id} data={x} />)}
            </View>
        </View>
    )
}

function RecordColumn() {
    return (
        <View>
            {DummyData.data.map(x => <DateGroup key={x.id} data={x} />)}
        </View>
    )
};

export default RecordColumn;
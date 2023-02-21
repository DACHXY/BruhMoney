import { View, Text, TouchableOpacity } from "react-native";
import PopUpPage from "../../pages/popup";
import { useState } from "react";

function AddRecord({ currentRecord, onPress, open }) {
    return (
        <>
            {
                open && (
                    < PopUpPage >
                        <TouchableOpacity onPress={onPress} style={{ backgroundColor: "red" }}>
                            <Text>{currentRecord.name}</Text>
                        </TouchableOpacity>
                    </PopUpPage >
                )
            }
        </>
    )
}

export default AddRecord;
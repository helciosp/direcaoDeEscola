import React from "react";
import { Actionsheet, useDisclose } from "native-base";
import Dots from 'react-native-vector-icons/Octicons';
import { TouchableOpacity, PixelRatio } from "react-native";

export default function ActionSheetNotes(props) {
    const { isOpen, onOpen, onClose } = useDisclose();
    return (
        <>
            <TouchableOpacity onPress={onOpen}>
                <Dots name='kebab-vertical' size={(15 * PixelRatio.get())} />
            </TouchableOpacity>
            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content>
                    <Actionsheet.Item onPress={props.updateNotas}>Modificar</Actionsheet.Item>
                    <Actionsheet.Item onPress={props.deletar}>Deletar</Actionsheet.Item>
                </Actionsheet.Content>
            </Actionsheet>
        </>
    )
}
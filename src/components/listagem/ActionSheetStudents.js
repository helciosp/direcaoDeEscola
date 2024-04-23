import React from "react";
import { Actionsheet, useDisclose } from "native-base";
import Dots from 'react-native-vector-icons/Octicons';
import { TouchableOpacity, PixelRatio, View } from "react-native";

export default function ActionSheetStudents(props) {
    const { isOpen, onOpen, onClose } = useDisclose();
    return (
        <>
            <TouchableOpacity onPress={onOpen}>
                <Dots name='kebab-vertical' size={(15 * PixelRatio.get())} />
            </TouchableOpacity>
            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content>
                    <Actionsheet.Item onPress={props.pagNota}>Adicionar nota</Actionsheet.Item>
                    <Actionsheet.Item onPress={props.updateAluno}>Atualizar dados do aluno</Actionsheet.Item>
                    <Actionsheet.Item onPress={props.excluir}>Excluir</Actionsheet.Item>
                </Actionsheet.Content>
            </Actionsheet>
        </>
    )
}

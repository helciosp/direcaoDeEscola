import React, { Component } from 'react'
import { View, Text, FlatList, DevSettings, Button} from 'react-native'
import Database from '../../my_db/DataBase.js'
import { mensagens } from '../../styles/index.js'

const db = new Database();

export default class Students extends Component {
    delete(id){
        db.deletar(id)
        DevSettings.reload();
    }
    render() {
        return (
            <View style= {mensagens.margin}>
                <View style={mensagens.cent}>
                    <Text>Id: {this.props.idAluno}</Text>
                    <Text>Estudante: {this.props.nomeAluno}</Text>
                    <Text>Nota: {this.props.nota}</Text>
                    <Button title='Deletar' onPress={() => this.delete(this.props.idAluno)} />
                </View>
            </View>
        )
    }
}
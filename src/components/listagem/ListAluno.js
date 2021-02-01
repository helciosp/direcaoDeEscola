import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import Students from './Students.js'
import { mensagens } from '../../styles/index.js'
import Database from '../../my_db/DataBase.js'

const db = new Database();

export default class ListAluno extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
        }
        this.students = []
        this.listar()
    }
    
    listar() {
        db.listar().then((data) => {
            this.setState({students: data})
        }); 
    }
    render() {
        return (
            <View style={mensagens.conteine}>
                <FlatList
                    data={this.state.students}
                    keyExtractor={(item, index) => item.idAluno + ''}
                    renderItem={({ item }) => <Students {...item} />}
                />
            </View>
        )
    }
}
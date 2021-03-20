import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import Notes from '../../components/listagem/Notes.js'
import Database from '../../my_db/DataBase.js';
import { app, students } from '../../styles/index.js'

const db = new Database();

export default class ListAluno extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
        }
        this.notes = []
        this.listarNotas()
    }

    listarNotas() {
        db.listarNotas().then((data) => {
            this.setState({ notes: data })
        });
    }
    render() {
        return (
            <View style={app.pagina}>            
                <View style={app.conteine}>
                    <FlatList
                        data={this.state.notes}
                        keyExtractor={(item, index) => item.idNotas + ''}
                        renderItem={({ item }) => <Notes {...item} metodo={this.props.navigation}/>}
                    />
                </View>
            </View>
        )
    }
}
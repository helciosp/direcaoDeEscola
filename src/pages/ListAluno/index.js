import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import Students from '../../components/listagem/Students.js'
import Database from '../../my_db/DataBase.js';
import { app } from '../../styles/index.js';
const db = new Database();

export default class ListAluno extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
        }
    }
    componentDidMount(){   
        this.props.navigation.addListener('focus', () => {
            this.listar()
        });
    }

    listar() {
        db.listar().then((data) => {
            this.setState({ students: data })
        });
    }
    render() {
        return (
            <View style={app.pagina}>
                <View style={app.conteine}>
                    <FlatList
                        data={this.state.students}
                        keyExtractor={(item, index) => item.idAluno + ''}
                        renderItem={({ item }) => <Students {...item} metodo={this.props.navigation} />}
                    />
                </View>
            </View>
        )
    }
}
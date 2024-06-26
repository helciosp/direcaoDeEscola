import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import Notes from '../../components/listagem/Notes.js';
import TbNotas from '../../my_db/TbNotas';
import { app } from '../../styles/index.js'

const db = new TbNotas();

export default class ListAluno extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
        }
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.listarNotas()
        });
    }

    listarNotas() {
        db.listarNotas().then((data) => {
            this.setState({ notes: data })
        });
    }
    render() {
        return (
            <View style={app.pagina}>
                <FlatList
                    data={this.state.notes}
                    keyExtractor={(item, index) => item.idNotas + ''}
                    renderItem={({ item }) => <Notes {...item} metodo={this.props.navigation} />}
                />
            </View>
        )
    }
}
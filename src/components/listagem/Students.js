import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TbAluno from '../../my_db/TbAluno';
import { list, app } from '../../styles/index.js';
import ActionSheetStudents from './ActionSheetStudents';

const db = new TbAluno();
const botao = ['Adicionar nota', 'Modificar', 'Deletar', 'Fechar'];
export default class Students extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            c: 1,
            visible: 0,
        } 
    }
    delete(id) {
        db.deletar(id)
        this.setState({ c: 0, visible: 0 })
    }
    operacao(index) {
        switch (index) {
            case 0:
                this.props.metodo.navigate('PagNota', { idAluno: this.props.idAluno, nomeAluno: this.props.nomeAluno })
                break;
            case 1:
                this.props.metodo.navigate('UpdateAluno', { idAluno: this.props.idAluno })
                break;
            case 2:
                this.setState({ visible: 1 })
                break;
        }
    }
    render() {
        return (
            <View style={(this.state.c) ? list.lista : app.deletado}>
                <View style={(this.props.idAluno % 2 == 0) ? list.centerPar : list.center}>
                    <View>
                        <Text style={list.title}>Nº: {this.props.idAluno}</Text>
                        <Text style={list.title}>Estudante: <Text style={list.valores}>{this.props.nomeAluno}</Text></Text>
                        <Text style={list.title}>Turma: <Text style={list.valores}>{this.props.turma}</Text></Text>
                    </View>
                    <View style={list.botaoView}>      
                        <ActionSheetStudents pagNota={() => this.operacao(0)} updateAluno={() => this.operacao(1)} excluir={() => this.operacao(2)}/>
                    </View>
                </View>
                {this.state.visible ?
                    <View style={list.modalCont}>
                        <View>
                            <Text style={list.modalTextMensagem}>Tem certesa que deseja deletar {this.props.nomeAluno} dessa lista? Se sim, as notas também vão ser deletadas.</Text>
                        </View>
                        <View style={list.modalContBotao}>
                            <TouchableOpacity style={list.modalSim} onPress={() => { this.delete(this.props.idAluno) }}>
                                <Text>Sim!</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={list.modalNao} onPress={() => { this.setState({ visible: false }) }}>
                                <Text>Não!</Text>
                            </TouchableOpacity>
                        </View>
                    </View> : null}
            </View>
        )
    }
}
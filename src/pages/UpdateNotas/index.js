import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableNativeFeedback,
    DevSettings,
} from 'react-native';
import { pagAluno, app } from '../../styles/index.js';
import DataBase from '../../my_db/DataBase.js';
import UpNotas from '../../model/UpNotas.js';
import { ScrollView } from 'react-native-gesture-handler';

export default class PagNota extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artes: '',
            biologia: '',
            educacaoFisica: '',
            fisica: '',
            geografia: '',
            historia: '',
            ingles: '',
            matematica: '',
            portuguesLiteratura: '',
            quimica: '',
            sociologia: '',
            bimestre: '',
            mensagem: '',
            c: 1
        };
    }

    alterarNotas(
        artes,
        biologia,
        educacaoFisica,
        fisica,
        geografia,
        historia,
        ingles,
        matematica,
        portuguesLiteratura,
        quimica,
        sociologia,
        bimestre
    ) {
        const { idNotas } = this.props.route.params;
        if (artes.trim() || biologia.trim() || educacaoFisica.trim() || fisica.trim() || geografia.trim() || historia.trim() || ingles.trim() || matematica.trim()
            || portuguesLiteratura.trim() || quimica.trim() || sociologia.trim()) {
            if (bimestre.trim()) {
                this.setState({ mensagem: 'Notas modificadas', c: 0 })
                const db = new DataBase();
                const notas = new UpNotas(
                    artes,
                    biologia,
                    educacaoFisica,
                    fisica,
                    geografia,
                    historia,
                    ingles,
                    matematica,
                    portuguesLiteratura,
                    quimica,
                    sociologia,
                    bimestre,
                );
                db.atualizarNotas(idNotas, notas);
            }
            else {
                this.setState({ mensagem: 'O campo bimestre é obrigátorio!', c: 1 })
            }

        }
        else {
            this.setState({ mensagem: 'Alguma coisa aqui deve ser preenchida!', c: 1 })
        }

    }
    render() {
        const { nomeAluno } = this.props.route.params;
        return (
            <ScrollView>
                <View style={app.pagina}>
                    <View style={app.conteine}>
                        <View style={pagAluno.margin}>
                            <View style={pagAluno.campos}>
                                <Text>Artes:</Text>
                                <TextInput
                                    keyboardType="numeric"
                                    placeholder="Informe a nota de Artes"
                                    maxLength={3}
                                    onChangeText={(art) => this.setState({ artes: art })}
                                />
                            </View>
                            <View style={pagAluno.campos}>
                                <Text>Biologia:</Text>
                                <TextInput
                                    keyboardType="numeric"
                                    placeholder="Informe a nota de Biologia"
                                    maxLength={3}
                                    onChangeText={(bio) => this.setState({ biologia: bio })}
                                />
                            </View>
                            <View style={pagAluno.campos}>
                                <Text>Educação Física:</Text>
                                <TextInput
                                    keyboardType="numeric"
                                    placeholder="Informe a nota de Edacação Física"
                                    maxLength={3}
                                    onChangeText={(edu) => this.setState({ educacaoFisica: edu })}
                                />
                            </View>
                            <View style={pagAluno.campos}>
                                <Text>Física:</Text>
                                <TextInput
                                    keyboardType="numeric"
                                    placeholder="Informe a nota de Física"
                                    maxLength={3}
                                    onChangeText={(fis) => this.setState({ fisica: fis })}
                                />
                            </View>
                            <View style={pagAluno.campos}>
                                <Text>Geografia:</Text>
                                <TextInput
                                    keyboardType="numeric"
                                    placeholder="Informe a nota de Geografia"
                                    maxLength={3}
                                    onChangeText={(geo) => this.setState({ geografia: geo })}
                                />
                            </View>
                            <View style={pagAluno.campos}>
                                <Text>História:</Text>
                                <TextInput
                                    keyboardType="numeric"
                                    placeholder="Informe a nota de História"
                                    maxLength={3}
                                    onChangeText={(his) => this.setState({ historia: his })}
                                />
                            </View>
                            <View style={pagAluno.campos}>
                                <Text>Inglês:</Text>
                                <TextInput
                                    keyboardType="numeric"
                                    placeholder="Informe a nota de Inglês"
                                    maxLength={3}
                                    onChangeText={(ing) => this.setState({ ingles: ing })}
                                />
                            </View>
                            <View style={pagAluno.campos}>
                                <Text>Matemática:</Text>
                                <TextInput
                                    keyboardType="numeric"
                                    placeholder="Informe a nota de Matemática"
                                    maxLength={3}
                                    onChangeText={(mat) => this.setState({ matematica: mat })}
                                />
                            </View>
                            <View style={pagAluno.campos}>
                                <Text>Portugues/Literatura:</Text>
                                <TextInput
                                    keyboardType="numeric"
                                    placeholder="Informe a nota de Portugues/Literatura"
                                    maxLength={3}
                                    onChangeText={(pot) =>
                                        this.setState({ portuguesLiteratura: pot })
                                    }
                                />
                            </View>
                            <View style={pagAluno.campos}>
                                <Text>Química:</Text>
                                <TextInput
                                    keyboardType="numeric"
                                    placeholder="Informe a nota de Química"
                                    maxLength={3}
                                    onChangeText={(qui) => this.setState({ quimica: qui })}
                                />
                            </View>
                            <View style={pagAluno.campos}>
                                <Text>Sociologia:</Text>
                                <TextInput
                                    keyboardType="numeric"
                                    placeholder="Informe a nota de Sociologia"
                                    maxLength={3}
                                    onChangeText={(soc) => this.setState({ sociologia: soc })}
                                />
                            </View>
                            <View style={pagAluno.campos}>
                                <Text>Bimestre:</Text>
                                <TextInput
                                    keyboardType="numeric"
                                    placeholder="Informe o bimestre"
                                    maxLength={1}
                                    onChangeText={(b) => this.setState({ bimestre: b })}
                                />
                            </View>

                            <TouchableNativeFeedback
                                onPress={() => {
                                    this.alterarNotas(
                                        this.state.artes,
                                        this.state.biologia,
                                        this.state.educacaoFisica,
                                        this.state.fisica,
                                        this.state.geografia,
                                        this.state.historia,
                                        this.state.ingles,
                                        this.state.matematica,
                                        this.state.portuguesLiteratura,
                                        this.state.quimica,
                                        this.state.sociologia,
                                        this.state.bimestre
                                    );
                                }}
                                background={
                                    Platform.OS === 'android'
                                        ? TouchableNativeFeedback.SelectableBackground()
                                        : ''
                                }>
                                <View style={pagAluno.botao}>
                                    <Text style={pagAluno.botaoText}>
                                        {"Modificar notas de: " + nomeAluno}
                                        {Platform.OS !== 'android' ? '(Android only)' : ''}
                                    </Text>
                                </View>
                            </TouchableNativeFeedback>
                            <Text style={(this.state.c) ? app.error : app.sucesso}>{this.state.mensagem}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

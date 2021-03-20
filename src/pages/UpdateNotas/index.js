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
            error: '',
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
    ) {
        const { idNotas } = this.props.route.params;
        if (idNotas == "NÃO SELECIONADO") {
            this.setState({ error: 'Error! Selecione uma nota na lista.' })
        }
        else {
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
            );

            db.atualizarNotas(idNotas, notas);
            DevSettings.reload();
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
                            <Text style={app.error}>{this.state.error}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

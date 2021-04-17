import Database from './DataBase';

const dataBase = new Database();

export default class TbNotas {
    adicionarNota(notas) {
        return new Promise((resolve) => {
            dataBase.conectar()
                .then((db) => {
                    db.transaction((tx) => {
                            tx.executeSql('INSERT INTO notas VALUES (?, ?, ?, ?, ?, ?)', [
                                notas.idNotas,
                                notas.nomeAluno,
                                notas.disciplina,
                                notas.nota,
                                notas.idAluno,
                                notas.bimestre,
                            ]).then(([tx, results]) => {
                                resolve(results);
                            });
                        })
                        .then((result) => {
                            dataBase.desconectar(db);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    }
    listarNotas() {
        return new Promise((resolve) => {
            const notas = [];
            dataBase.conectar()
                .then((db) => {
                    db.transaction((tx) => {
                            //Query SQL para listar os dados da tabela
                            tx.executeSql('SELECT * FROM notas', []).then(
                                ([tx, results]) => {
                                    var len = results.rows.length;
                                    for (let i = 0; i < len; i++) {
                                        let row = results.rows.item(i);
                                        const { idNotas, nomeAluno, disciplina, nota, idAluno, bimestre } = row;
                                        notas.push({
                                            idNotas,
                                            nomeAluno,
                                            disciplina,
                                            nota,
                                            idAluno,
                                            bimestre
                                        });
                                    }
                                    console.log(notas);
                                    resolve(notas);
                                },
                            );
                        })
                        .then((result) => {
                            dataBase.desconectar(db);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    }

    // Deletar Produto

    deletarNotas(idNotas) {
        return new Promise((resolve) => {
            dataBase.conectar()
                .then((db) => {
                    db.transaction((tx) => {
                            tx.executeSql('DELETE FROM notas WHERE idNotas = ?', [idNotas]).then(
                                ([tx, results]) => {
                                    console.log(results);
                                    resolve(results);
                                },
                            );
                        })
                        .then((result) => {
                            dataBase.desconectar(db);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    }
    atualizarNotas(idNotas, notas) {
        return new Promise((resolve) => {
            dataBase.conectar()
                .then((db) => {
                    db.transaction((tx) => {
                            //Query SQL para atualizar um dado no banco
                            tx.executeSql(
                                'UPDATE notas SET disciplina = ?, nota = ?, bimestre = ? WHERE idNotas = ?',
                                [
                                    notas.disciplina,
                                    notas.nota,
                                    notas.bimestre,
                                    idNotas,
                                ],
                            ).then(([tx, results]) => {
                                resolve(results);
                            });
                        })
                        .then((result) => {
                            dataBase.desconectar(db);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    }
}
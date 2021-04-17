import Database from './DataBase';

const dataBase = new Database();

export default class TbAluno {
    adicionarAluno(escola) {
        return new Promise((resolve) => {
            dataBase.conectar()
                .then((db) => {
                    db.transaction((tx) => {
                        tx.executeSql('INSERT INTO aluno VALUES (?, ?, ?)', [
                            escola.idAluno,
                            escola.nomeAluno,
                            escola.turma
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
    };
    listar() {
        return new Promise((resolve) => {
            const alunos = [];
            dataBase.conectar()
                .then((db) => {
                    db.transaction((tx) => {
                        tx.executeSql('SELECT * FROM aluno ORDER BY nomeAluno desc', []).then(
                            ([tx, results]) => {
                                var len = results.rows.length;
                                for (let i = 0; i < len; i++) {
                                    let row = results.rows.item(i);
                                    const { idAluno, nomeAluno, turma } = row;
                                    alunos.push({ idAluno, nomeAluno, turma });
                                }
                                console.log(alunos);
                                resolve(alunos);
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
    };
    atualizar(idAluno, prod) {
        return new Promise((resolve) => {
            dataBase.conectar()
                .then((db) => {
                    db.transaction((tx) => {
                        //Query SQL para atualizar um dado no banco
                        tx.executeSql(
                            'UPDATE aluno SET nomeAluno = ?, turma = ? WHERE idAluno = ?',
                            [prod.nomeAluno, prod.turma, idAluno],
                        ).then(([tx, results]) => {
                            resolve(results);
                        });
                        tx.executeSql(
                            'UPDATE notas SET nomeAluno = ? WHERE idAluno = ?',
                            [prod.nomeAluno, idAluno],
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
    };
    deletar(idAluno) {
        return new Promise((resolve) => {
            dataBase.conectar()
                .then((db) => {
                    db.transaction((tx) => {
                        tx.executeSql('DELETE FROM aluno WHERE idAluno = ?', [idAluno]).then(
                            ([tx, results]) => {
                                console.log(results);
                                resolve(results);
                            },
                        );
                        tx.executeSql('DELETE FROM notas WHERE idAluno = ?', [idAluno]).then(
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
    };
}
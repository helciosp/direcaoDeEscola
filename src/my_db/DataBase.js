import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = 'direcaoDeEscolas.db';
const database_version = '1.0';
const database_display_name = 'db_direcaoDeEscola';
const database_size = 200000;

export default class Database {
    conectar() {
        let db;
        return new Promise((resolve) => {
            console.log('Checando a integridade do plugin ...');
            SQLite.echoTest()
                .then(() => {
                    console.log('Integridade Ok ...');
                    console.log('Abrindo Banco de Dados ...');
                    SQLite.openDatabase(
                        database_name,
                        database_version,
                        database_display_name,
                        database_size,
                    )
                        .then((DB) => {
                            db = DB;
                            console.log('Banco de dados Aberto');
                            db.executeSql('PRAGMA foreign_keys = ON;')
                                .then(() => {
                                    console.log(
                                        'Chave estrageira ativada ...',
                                    );
                                })
                                .catch((error) => {
                                    console.log('Erro Recebido: ', error);
                                    console.log(
                                        'Não sei o que acontece agora :(',
                                    );
                                })
                            db.executeSql('SELECT 1 FROM aluno LIMIT 1')
                                .then(() => {
                                    console.log(
                                        'O banco de dados está pronto ... Executando Consulta SQL ...',
                                    );
                                })
                                .catch((error) => {
                                    console.log('Erro Recebido: ', error);
                                    console.log(
                                        'O Banco de dados não está pronto ... Criando Dados',
                                    );
                                    db.transaction((tx) => {
                                        tx.executeSql('CREATE TABLE IF NOT EXISTS aluno (idAluno INTEGER PRIMARY KEY AUTOINCREMENT, nomeAluno VARCHAR(30), turma VARCHAR(10))');
                                    })
                                        .then(() => {
                                            console.log('Tabela criada com Sucesso');
                                        })
                                        .catch((error) => {
                                            console.log(error);
                                        });
                                });
                            db.executeSql('SELECT 1 FROM notas LIMIT 1')
                                .then(() => {
                                    console.log(
                                        'O banco de dados está pronto ... Executando Consulta SQL ...',
                                    );
                                })
                                .catch((error) => {
                                    console.log('Erro Recebido: ', error);
                                    console.log(
                                        'O Banco de dados não está pronto ... Criando Dados para tabela notas',
                                    );

                                    db.transaction((tx) => {
                                        tx.executeSql('CREATE TABLE IF NOT EXISTS notas (idNotas INTEGER PRIMARY KEY AUTOINCREMENT,nomeAluno VARCHAR(30), artes VARCHAR(3), biologia VARCHAR(3), educacaoFisica VARCHAR(3), fisica VARCHAR(3), geografia VARCHAR(3), historia VARCHAR(3), ingles VARCHAR(3), matematica VARCHAR(3), portuguesLiteratura VARCHAR(3), quimica VARCHAR(3), sociologia VARCHAR(3), idAluno INTEGER, bimestre CHAR(1))'); //FOREIGN KEY (idAluno) REFERENCES aluno(idAluno)
                                    })
                                        .then(() => {
                                            console.log('Tabela criada com Sucesso');
                                        })
                                        .catch((error) => {
                                            console.log(error);
                                        });
                                });
                            resolve(db);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                })
                .catch((error) => {
                    console.log('echoTest Falhou - plugin não funcional');
                });
        });
    }
    desconectar(db) {
        if (db) {
            console.log('Fechando Banco de Dados');
            db.close()
                .then((status) => {
                    console.log('Banco de dados Desconectado!!');
                })
                .catch((error) => {
                    this.errorCB(error);
                });
        } else {
            console.log('A conexão com o banco não está aberta');
        }
    }
    adicionarAluno(escola) {
        return new Promise((resolve) => {
            this.conectar()
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
                            this.desconectar(db);
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
    adicionarNota(notas) {
        return new Promise((resolve) => {
            this.conectar()
                .then((db) => {
                    db.transaction((tx) => {
                        tx.executeSql('INSERT INTO notas VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
                            notas.idNotas,
                            notas.nomeAluno,
                            notas.artes,
                            notas.biologia,
                            notas.educacaoFisica,
                            notas.fisica,
                            notas.geografia,
                            notas.historia,
                            notas.ingles,
                            notas.matematica,
                            notas.portuguesLiteratura,
                            notas.quimica,
                            notas.sociologia,
                            notas.idAluno,
                            notas.bimestre,
                        ]).then(([tx, results]) => {
                            resolve(results);
                        });
                    })
                        .then((result) => {
                            this.desconectar(db);
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
    // Listar todos os Produtos
    listar() {
        return new Promise((resolve) => {
            const alunos = [];
            this.conectar()
                .then((db) => {
                    db.transaction((tx) => {
                        tx.executeSql('SELECT * FROM aluno', []).then(
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
                            this.desconectar(db);
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
            this.conectar()
                .then((db) => {
                    db.transaction((tx) => {
                        //Query SQL para listar os dados da tabela
                        tx.executeSql('SELECT * FROM notas', []).then(
                            ([tx, results]) => {
                                var len = results.rows.length;
                                for (let i = 0; i < len; i++) {
                                    let row = results.rows.item(i);
                                    const { idNotas,
                                        nomeAluno,
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
                                        idAluno,
                                        bimestre
                                    } = row;
                                    notas.push({
                                        idNotas,
                                        nomeAluno,
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
                            this.desconectar(db);
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
    atualizar(idAluno, prod) {
        return new Promise((resolve) => {
            this.conectar()
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
                            this.desconectar(db);
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
    deletar(idAluno) {
        return new Promise((resolve) => {
            this.conectar()
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
                            this.desconectar(db);
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
    deletarNotas(idNotas) {
        return new Promise((resolve) => {
            this.conectar()
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
                            this.desconectar(db);
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
            this.conectar()
                .then((db) => {
                    db.transaction((tx) => {
                        //Query SQL para atualizar um dado no banco
                        tx.executeSql(
                            'UPDATE notas SET artes = ?, biologia = ?, educacaoFisica = ?, fisica = ?, geografia = ?, historia = ?, ingles = ?, matematica = ?, portuguesLiteratura = ?, quimica = ?, sociologia = ?, bimestre = ? WHERE idNotas = ?',
                            [
                                notas.artes,
                                notas.biologia,
                                notas.educacaoFisica,
                                notas.fisica,
                                notas.geografia,
                                notas.historia,
                                notas.ingles,
                                notas.matematica,
                                notas.portuguesLiteratura,
                                notas.quimica,
                                notas.sociologia,
                                notas.bimestre,
                                idNotas,
                            ],
                        ).then(([tx, results]) => {
                            resolve(results);
                        });
                    })
                        .then((result) => {
                            this.desconectar(db);
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

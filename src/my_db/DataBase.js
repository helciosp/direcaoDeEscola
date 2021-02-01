import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = 'direcaoDeEscola.db';
const database_version = '1.0';
const database_display_name = 'db_direcaoDeEscola';
const database_size = 200000;

export default class Database {
    //Conectar com o banco de dados
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
                                    db.executeSql([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
                                        console.log('oreign heys turned on'));
                                    db.transaction((tx) => {
                                        tx.executeSql('CREATE TABLE IF NOT EXISTS aluno (idAluno INTEGER PRIMARY KEY AUTOINCREMENT, nomeAluno VARCHAR(30), nota VARCHAR(3))');
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

    // Fechar conexão com o banco de dados
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
                        //Query SQL para inserir um novo produto
                        tx.executeSql('INSERT INTO aluno VALUES (?, ?, ?)', [
                            escola.idAluno,
                            escola.nomeAluno,
                            escola.nota
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
                        //Query SQL para listar os dados da tabela
                        tx.executeSql('SELECT * FROM aluno', []).then(
                            ([tx, results]) => {
                                var len = results.rows.length;
                                for (let i = 0; i < len; i++) {
                                    let row = results.rows.item(i);
                                    const { idAluno, nomeAluno, nota } = row;
                                    alunos.unshift({ idAluno, nomeAluno, nota });
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

    // Buscar por ID
    buscarPorId(id) {
        console.log(id);
        return new Promise((resolve) => {
            this.conectar()
                .then((db) => {
                    db.transaction((tx) => {
                        //Query SQL para buscar as informações do produto
                        tx.executeSql('SELECT * FROM Produtos WHERE id = ?', [id]).then(
                            ([tx, results]) => {
                                console.log(results);
                                if (results.rows.length > 0) {
                                    let row = results.rows.item(0);
                                    resolve(row);
                                }
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

    // Adicionar Produto


    // Editar Produto
    atualizar(id, prod) {
        return new Promise((resolve) => {
            this.conectar()
                .then((db) => {
                    db.transaction((tx) => {
                        //Query SQL para atualizar um dado no banco
                        tx.executeSql(
                            'UPDATE tarefa SET nome = ?, fabricante = ? WHERE id = ?',
                            [prod.nome, prod.fabricante, id],
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

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
                                        tx.executeSql('CREATE TABLE IF NOT EXISTS notas (idNotas INTEGER PRIMARY KEY AUTOINCREMENT,nomeAluno VARCHAR(30), disciplina VARCHAR(20), nota VARCHAR(3), idAluno INTEGER, bimestre CHAR(1))'); //FOREIGN KEY (idAluno) REFERENCES aluno(idAluno)
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
}

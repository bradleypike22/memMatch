import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('memoryMatch.db');

export const initializeDatabase = () => {
    db.transaction((tx) => {
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS scores (id INTEGER PRIMARY KEY AUTOINCREMENT, score INT, date INT);",
            [],
            () => console.log('Table created successfully'),
            (_, error) => console.log('Error creating table:', error)
        );
    });
};

export const saveScore = (score) => {
    db.transaction((tx) => {
        tx.executeSql(
            "INSERT INTO scores (score, date) VALUES (?, ?);",
            [score, Date.now()],
            () => console.log('Score saved successfully'),
            (_, error) => console.log('Error saving score:', error)
        );
    });
};

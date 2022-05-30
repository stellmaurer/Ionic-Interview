import { TicTacToe } from './TicTacToe';

async function main() {
    let t: TicTacToe = new TicTacToe();
    t.print();
    console.log();
    t.makeMove('X', 0, 1);
    t.print();
    console.log();
    t.makeMove('O', 1, 1);
    t.print();
    console.log();
    t.makeMove('X', 1, 1);
    t.print();
    console.log();
}

main();
class TicTacToe {
    public board: string[][];
    constructor () {
        this.board = [["-", "-", "-"], ["-", "-", "-"], ["-", "-", "-"]];
    }

    public makeMove(c: string, i: number, j: number): void {
        if (i < 0 || i > 2 || j < 0 || j > 2 || !['X', 'O'].includes(c) ||
            this.board[i][j] != '-') {
            return;
        }
        this.board[i][j] = c;
    }

    private determineWinner(): string {
        let curr = '-';
        for (let i = 0; i < 3; i++) {
            let num = 0;
            for (let j = 0; j < 3; j++) {
                if (curr != this.board[i][j]) {
                    num = 0;
                }
                curr = this.board[i][j];
                num++;
                if (num >= 3) {
                    return curr;
                }
            }
        }
        return null;
    }

    public print(): void {
        for (let i = 0; i < this.board.length; i++) {
            console.log(this.board[i]);
        }
    }
}

export { TicTacToe };
class TicTacToe {
    constructor() {
        this.currentPlayer = true;
        this.field = [[null,null,null],[null,null,null],[null,null,null]]
        this.turn = 0;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.field[rowIndex][columnIndex] == null) {
            this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.currentPlayer = !this.currentPlayer;
            this.turn++;
        } 
        
        
    }
    check() {
        for (let index = 0; index < this.field.length; index++) {
            for (let b = 0; b < this.field.length; b++) {
                //console.log(' '+index+ '' +b+' '+this.field[index][b]);
                
            }
            
        }
    }
    isFinished() {
        return this.getWinner() || this.isDraw() ? true : false
    }

    getWinner() {
        for (let i = 0; i < 3; i++) {
            if ((this.field[i][0] == this.field[i][1] && this.field[i][0] == this.field[i][2]) && this.field[i][0] == 'x') {
                return 'x';
            } else if ((this.field[i][0] == this.field[i][1] && this.field[i][0] == this.field[i][2]) && this.field[i][0] == 'o'){
                return 'o';
            }
        }
        for (let i = 0; i < 3; i++) {
            if ((this.field[0][i] == this.field[1][i] && this.field[0][i] == this.field[2][i]) && this.field[0][i] == 'x') {
                return 'x';
            } else if ((this.field[0][i] == this.field[1][i] && this.field[0][i] == this.field[2][i]) && this.field[0][i] == 'o'){
                return 'o'
            }
        }
        if ((this.field[0][0] == this.field[1][1] && this.field[0][0] == this.field[2][2]) && this.field[0][0] == 'x') {
            return 'x'
        } else if ((this.field[0][0] == this.field[1][1] && this.field[0][0] == this.field[2][2]) && this.field[0][0] == 'o'  ){
            return 'o'
        }
        if ((this.field[0][2] == this.field[1][1] && this.field[0][2] == this.field[2][0]) && this.field[0][2] == 'x') {
            return 'x'
        } else if ((this.field[0][2] == this.field[1][1] && this.field[0][2] == this.field[2][0]) && this.field[0][2] == 'o'){
            return 'o'
        }
        return null;
    }

    noMoreTurns() {
        return this.turn > 8 ? true : false;
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner()  ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}
let tt = new TicTacToe;
tt.nextTurn(0, 1);
console.log(tt.getCurrentPlayerSymbol());
tt.nextTurn(0, 1);
console.log(tt.getCurrentPlayerSymbol());

module.exports = TicTacToe;

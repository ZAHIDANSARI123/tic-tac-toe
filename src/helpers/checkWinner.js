function isWinner(board, Symbol) {
    if(board[0] == board[1] && board[1] == board[2] && board[2] == Symbol) return Symbol
    if(board[0] == board[1] && board[1] == board[2] && board[2] == Symbol) return Symbol
    if(board[0] == board[1] && board[1] == board[2] && board[2] == Symbol) return Symbol


    if(board[0] == board[3] && board[3] == board[6] && board[6] == Symbol) return Symbol
    if(board[1] == board[4] && board[4] == board[7] && board[7] == Symbol) return Symbol
    if(board[2] == board[5] && board[5] == board[8] && board[8] == Symbol) return Symbol

    if(board[0] == board[4] && board[4] == board[8] && board[4] == Symbol) return Symbol
    if(board[2] == board[4] && board[4] == board[6] && board[4] == Symbol) return Symbol
    

    return "";
}

export default isWinner
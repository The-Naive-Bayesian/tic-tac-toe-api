## Description
A simple stateless backend for a tic-tac-toe game. Makes random valid moves
and determines when the game is over and who won.

## How to use
Starting the server is as easy as running `npm start`!

The server expects a `POST` to `/tic-tac-toe` with a JSON
body containing a field `boardState` that is a 3x3 array with
values of 0 (empty square), 1 (a player's piece),
 and 2 (the computer's piece).

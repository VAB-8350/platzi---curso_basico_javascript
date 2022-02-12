const piedra = 1;
const papel = 2;
const tijera = 3;

function playGame(op) {
    opciones = ['piedra', 'papel', 'tijera']
    opCpu = Math.floor(Math.random()*(4 - 1) + 1);

    if (opCpu == op) {
        console.log('tu =', opciones[op-1], 'vs cpu =', opciones[opCpu-1]);
        console.log('empate');
    }
    else if (opCpu == 1 && op == 2) {
        console.log('tu =', opciones[op-1], 'vs cpu =', opciones[opCpu-1]);
        console.log('Ganaste');
    }
    else if(opCpu == 2 && op == 3) {
        console.log('tu =', opciones[op-1], 'vs cpu =', opciones[opCpu-1]);
        console.log('Ganaste');
    }
    else if(opCpu == 3 && op == 1) {
        console.log('tu =', opciones[op-1], 'vs cpu =', opciones[opCpu-1]);
        console.log('Ganaste');
    }
    else{
        console.log('tu =', opciones[op-1], 'vs cpu =', opciones[opCpu-1]);
        console.log('Perdiste');
    }
};
playGame(tijera);



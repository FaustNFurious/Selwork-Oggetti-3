// Creare un oggetto Bowling, con lista giocatori, punteggi e determinare il vincitore

let bowling = {
    'players': [
        {'name': 'Livio', 'scores': []},
        {'name': 'Paola', 'scores': []},
        {'name': 'Filippo', 'scores': []},
        {'name': 'Giuseppe', 'scores': []}
    ],

    'mostraGiocatori': function(nome, punteggio) {
        console.log(`La lista di tutti i giocatori è:`);
        this.players.forEach( (giocatori) => console.log(`${giocatori.name} : ${giocatori.scores}`) );
    },
    
    'punteggiGiocatori': function() {
        // Creare 10 punteggi casuali
        const tiri = 10;
        let somma1 = 0;
        let somma2 = 0;
        let somma3 = 0;
        let somma4 = 0;
        
        for (let i = 1; i <= tiri; i++) {
            somma1 = somma1 + Math.floor(Math.random() * (10 - 1 + 1) + 1);
            somma2 = somma2 + Math.floor(Math.random() * (10 - 1 + 1) + 1);
            somma3 = somma3 + Math.floor(Math.random() * (10 - 1 + 1) + 1);
            somma4 = somma4 + Math.floor(Math.random() * (10 - 1 + 1) + 1);
            
        }

        console.log(`Livio ha totalizzato ${somma1} punti`);
        console.log(`Paola ha totalizzato ${somma2} punti`);
        console.log(`Filippo ha totalizzato ${somma3} punti`);
        console.log(`Giuseppe ha totalizzato ${somma4} punti`);
    },

    'aggiungiGiocatori': function(nome) {
        this.players.push(nome);
        console.log(`Il giocatore ${nome} è stato aggiunto`);
    },


}

bowling.mostraGiocatori();
bowling.punteggiGiocatori();
bowling.aggiungiGiocatori('Lorenzo');
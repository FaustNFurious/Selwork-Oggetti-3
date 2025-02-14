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
        this.players.forEach(giocatori => {
            for (let i = 1; i <= tiri; i++) {
                giocatori.scores.push(Math.floor(Math.random() * (10 - 1 + 1) + 1))
                
            }
            
        });
    },

    'aggiungiGiocatori': function(nome) {
        const tiri = 10;
        let nouvoGiocatore = {name: nome, scores: []}

        this.players.push(nome);
        console.log(`Il giocatore ${nome} è stato aggiunto`);

        for (let i = 1; i <= tiri; i++) {
            nouvoGiocatore.scores.push(Math.floor(Math.random() * (10 - 1 + 1) + 1))
            
        }
        
    },

    'punteggioTotale': function() {
        this.players.forEach(giocatori => {
            let totale = giocatori.scores.reduce((num1, num2) => num1 + num2);
            giocatori.tot = totale;
            
        });
        
        this.players.sort((a, b) => b.tot - a.tot);
        
    },

    'winner': function() {
        let winner = this.players[0];
        console.log(`Il vincitore è ${winner.name} totalizzando ${winner.tot} punti`);
        
    },

    'classifica': function() {
        console.log('La classifica finale è:');
        this.players.forEach(giocatori => {
            console.log(`${giocatori.name} con ${giocatori.tot} punti`);
            
        });
        
    }

}

bowling.mostraGiocatori();
bowling.punteggiGiocatori();
bowling.aggiungiGiocatori('Lorenzo');
bowling.punteggioTotale();
bowling.winner();
bowling.classifica();
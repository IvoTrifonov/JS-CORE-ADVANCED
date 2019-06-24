function printDeckOfCards(cards) {
    let resultCards = cards.map(c => makeCard(c.slice(0, c.length - 1), c[c.length - 1]));
    let invalidCard = resultCards.find(c => typeof c !== "object");
    !invalidCard ? console.log(resultCards.join(' ')) : console.log(invalidCard);

    function makeCard(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }
        
        try {
            if (!faces.includes(face)) {
                throw new Error('Invalid card face!');
            }
        
            if (!suits[suit]) {
                throw new Error('Invalid card suit!');
            }
        
            let card = {
                face: face,
                suit: suits[suit],
                toString: function () {
                    return this.face + this.suit;
                }
            };
        
            return card;
        } catch (error) {
            return `Invalid card: ${face + suit}`;
        }
    }
}

printDeckOfCards(['5S', '3D', 'QD', '1C']);
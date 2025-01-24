
class Card{
    static async getAllCardThem(deck_id){
        const response = await fetch('http://localhost:3000/api/card/id');
        const decksThem = await response.json();
        return decksThem.data;
    }
}

export default Card
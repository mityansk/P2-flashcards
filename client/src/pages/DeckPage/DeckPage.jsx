/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Deck from '../../entities/Deck';
import TaskDeck from '../../shared/TaskDeck';

function DeckPage() {

    // const decks = [{"id": 1, "name":"Музыка"}, {"id": 2, "name":"Кайты"}]
    // const decks = Deck.getAllDecks()
    const [decks, setDecks] = useState([]);

    async function decksHandler () {
        const data = await Deck.getAllDecks()
        setDecks(data)
    }

    useEffect(() => {
        decksHandler();
      }, []);
    
    return (
        
        <div className="container mt-3">
            <div ><h2>Привет, user! <br />Выбери тему!</h2></div>
            <div>
                {decks.map(deck => <TaskDeck key={deck.id} deck={deck} />)}
            </div>
        </div>


        
    );
}

export default DeckPage;
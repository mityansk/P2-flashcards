import React, { useState } from 'react';

class Deck {
    static async getAllDecks() {
        const response = await fetch('http://localhost:3000/api/deck');
        const AllDecks = await response.json();
        return AllDecks.data;
}
}

export default Deck;
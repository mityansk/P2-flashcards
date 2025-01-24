import { useEffect, useState } from "react";
import ContentCard from "../../shared/ContentCard";
import Card from '../../entities/Card/CardApi'
function CardPage(deck_id) {

// принять массив с вопросами по выбранной теме
const [cards , setCards] = useState(null)
const [currentCard, setCard] = useState(null)


useEffect(async ()=>{ 
   
    setCards(car)
},[deck_id])

const getCards = async () => {
    const cardsNew = await Card.getAllCardThem()
    setCards(cardsNew)
}

    return (
    
        <ContentCard type="Card" data={card}  />
     
    );
}

export default CardPage;
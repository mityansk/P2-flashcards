import { useEffect, useState } from "react";
import ContentCard from "../../shared/ContentCard";
import Card from '../../entities/Card/CardApi'
import { useParams } from "react-router-dom";
function CardPage() {

    const {cardId} = useParams()

    const [cards , setCards] = useState(null)
    const 



    useEffect(()=>{ 
        getCards()
    },[cardId])

    const getCards = async () => {
        const cardsNew = await Card.getAllCardThem(cardId)
        setCards(cardsNew)
    }

    return (
        <ContentCard type="Card" data={cards}  />
     
    );
}

export default CardPage;
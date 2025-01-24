/* eslint-disable react/prop-types */

import { useNavigate } from 'react-router-dom';

function TaskDeck({ deck }) {
    const navigate = useNavigate();

    return (
        <div className="card mt-3">
                <button 
                type="button" 
                class="btn btn-light" 
                onClick={() => navigate(`/card/${deck.id}`)}>{deck.name}</button>
            </div>
    );
}

export default TaskDeck;
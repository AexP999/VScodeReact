import React from 'react';
import st from './Card.module.css'

function Card(props) {
    // делается так Card.module.css  { styles.card1 } для того, чтобы нельзя было переписать стили снаружи
    return (
        <div className={st.card1}>
            <h3>{props.title}</h3>
        </div>
    );
}



export default Card;
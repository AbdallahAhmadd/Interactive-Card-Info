import './card.css'
import BackCardImage from '../../assets/bg-card-back.png'
import React from 'react';

function BackCard() {

    const [cvv, setCvv] = React.useState('000');

    return (
        <div className={'back-card-container'}>
            <img src={BackCardImage} alt={'back of a credit card'}/>
            <span className={'cvv'}>{cvv}</span>
        </div>

    )
}


export default BackCard;
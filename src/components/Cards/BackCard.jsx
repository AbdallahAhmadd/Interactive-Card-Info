import './card.css'
import BackCardImage from '../../assets/bg-card-back.png'
import React from 'react';

function BackCard({ccv}) {


    return (
        <div className={'back-card-container'}>
            <img src={BackCardImage} alt={'back of a credit card'}/>
            <span className={'cvv'}>{ccv===''?'000': ccv}</span>
        </div>

    )
}


export default BackCard;
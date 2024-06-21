import FrontCardImage from '../../assets/bg-card-front.png';
import './card.css'
import React from 'react';

function FrontCard(){
    const [cardNumber, setCardNumber] = React.useState('0000 0000 0000 0000');
    const [expiryDate, setExpiryDate] = React.useState('00/00');
    const [cardholderName, setCardholderName] = React.useState('FULL NAME');

    return(

        <div className={'front-card-container'}>

            <img src={FrontCardImage} alt={'front credit card image'}/>
            <div className={'circle'}/>
            <div className={'circle2'}/>
            <span className="card-number">{cardNumber}</span>

            <div className={'card-info'}>
                <span className="expiry-date">{expiryDate}</span>
                <span className="cardholder-name">{cardholderName}</span>
            </div>

        </div>

    );

}

export default FrontCard;
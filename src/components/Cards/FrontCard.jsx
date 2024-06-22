import FrontCardImage from '../../assets/bg-card-front.png';
import './card.css'
import React from 'react';

function FrontCard(){
    const [cardNumber, setCardNumber] = React.useState('0000 0000 0000 0000');
    const [expiryDate, setExpiryDate] = React.useState('00/00');
    const [cardholderName, setCardholderName] = React.useState('FULL NAME');

    return(

        <div className={'front-card-container'}>
            <img className={'front-card-image'} src={FrontCardImage} alt={'front credit card image'}/>
            <div className={'circle'}/>
            <div className={'circle2'}/>

            <div className={'card-data-container'}>
                <div className={'card-number'}>
                    <p>{cardNumber}</p>
                </div>
                <div className={'card-credentials'}>
                    <p className={'expiryDate'}>{expiryDate}</p>
                    <p className={'cardholderName'}>{cardholderName}</p>
                </div>
            </div>

        </div>


    );

}

export default FrontCard;
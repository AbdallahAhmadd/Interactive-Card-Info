import FrontCardImage from '../../assets/bg-card-front.png';
import './card.css'
import React from 'react';

function FrontCard({cardNumber, expiryMonth, cardholderName, expiryYear}){
    function formatCardNumber(number) {
        return number.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
    }

    return(

        <div className={'front-card-container'}>
            <img className={'front-card-image'} src={FrontCardImage} alt={'front credit card image'}/>
            <div className={'circle'}/>
            <div className={'circle2'}/>

            <div className={'card-data-container'}>
                <div className={'card-number'}>
                    <p>{cardNumber===''? '0000 0000 0000 0000': formatCardNumber(cardNumber)}</p>
                </div>
                <div className={'card-credentials'}>
                    <p className={'expiryDate'}>{expiryMonth==='' ? '00' :expiryMonth}/{expiryYear===''? '00' :  expiryYear}</p>
                    <p className={'cardholderName'}>{cardholderName===''? 'Your Name': cardholderName }</p>
                </div>
            </div>

        </div>


    );

}

export default FrontCard;
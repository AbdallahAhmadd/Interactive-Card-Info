import './form.css'
import Button from "../Button/button.jsx";
import React, {useState} from "react";

function CardForm({setCardNumber, setExpiryMonth, setCardholderName, setCcv,setExpiryYear,onSubmit}){
    const [cardNumber, setCardNumberState] = useState('');

    const formatCardNumber = (value) => {
        return value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
    };

    const handleCardNumberChange = (e) => {
        const formattedValue = formatCardNumber(e.target.value);
        setCardNumberState(formattedValue);
        setCardNumber(formattedValue.replace(/\s/g, '')); // Remove spaces for the state update
    };




    return(
        <div className='form-container'>


            <div className={'form-container_cardholder-name'}>
                <p>CARDHOLDER NAME</p>
               <input placeholder={'e.g. Jane Appleseed'} onChange={(e)=>setCardholderName(e.target.value)}/>
            </div>


            <div className={'form-container_card-number'}>
                <p>CARD NUMBER</p>
                <input placeholder={'e.g. 1234 9999 2222 0000'}  onChange={handleCardNumberChange} value={cardNumber}/>
            </div>


            <div className={'form-container_credentials'}>

                <div className={'form-container_credentials_expiry-container'}>
                    <p>EXP. DATE(MM/YY)</p>
                    <div className={'form-container_credentials_expiry-container_month-year'}>
                        <input placeholder={'MM'} onChange={(e)=>setExpiryMonth(e.target.value)}/>
                        <input placeholder={'YY'} onChange={(e)=>setExpiryYear(e.target.value)}/>
                    </div>

                </div>

                <div className={'form-container_credentials_ccv'}>
                        <p>CCV</p>
                        <input placeholder={'e.g. 123'} onChange={(e)=>setCcv(e.target.value)}/>
                </div>

            </div>

            <Button onClick={onSubmit}/>


        </div>

    );


}

export default CardForm
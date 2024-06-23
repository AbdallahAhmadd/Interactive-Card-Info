import './form.css'
import Button from "../Button/button.jsx";
import React, {useState} from "react";

function CardForm({setCardNumber, setExpiryMonth, setCardholderName, setCcv,setExpiryYear,onSubmit}){
    const [cardNumber, setCardNumberState] = useState('');
    const [ccv, setCcvState] = useState('');
    const [expiryMonth, setExpiryMonthState] = useState('');
    const [expiryYear, setExpiryYearState] = useState('');
    const [cardholderName, setCardholderNameState] = useState('');

    const formatCardNumber = (value) => {
        return value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
    };

    const handleCardholderNameChange = (e) => {
        const value = e.target.value.replace(/\s/g, ''); // Remove any spaces
        const isValid = /^[a-zA-Z ]*$/.test(value); // Check if the value contains only letters

        if(isValid || value === ""){
            setCardholderName(e.target.value.toUpperCase()); // Update the cardholder name state
            setCardholderNameState(e.target.value); // Update the cardholder name state without spaces
        }

    }

    const handleCardNumberChange = (e) => {
        const value = e.target.value.replace(/\s/g, ''); // Remove any spaces
        const isValid = /^[0-9]*$/.test(value); // Check if the value contains only digits

        if (isValid || value === "") {
            const formattedValue = formatCardNumber(value); // Format the card number
            setCardNumberState(formattedValue); // Update the formatted card number state
            setCardNumber(value); // Update the card number state without spaces
        }
    };

    const handleCvvChange = (e) => {
        const value = e.target.value.replace(/\s/g, ''); // Remove any spaces
        const isValid = /^[0-9]*$/.test(value); // Check if the value contains only digits

        if (isValid || value === "") {
            setCcv(value); // Update the CVV state with the validated value
            setCcvState(value); // Update the CVV state without spaces
        }
    };
    const handleMonthChange = (e) => {
        const value = e.target.value.replace(/\s/g, ''); // Remove any spaces
        const isValid = /^[0-9]*$/.test(value); // Check if the value contains only digits

        if ((isValid && value === "") || (isValid && Number(value) >= 1 && Number(value) <= 12) || (value === "0" || value === "01" || value === "02" || value === "03" || value === "04" || value === "05" || value === "06" || value === "07" || value === "08" || value === "09")) {
            setExpiryMonth(value); // Update the CVV state with the validated value
            setExpiryMonthState(value); // Update the CVV state without spaces
        }
    };

    const handeYearChange = (e) => {
        const value = e.target.value.replace(/\s/g, ''); // Remove any spaces
        const isValid = /^[0-9]*$/.test(value); // Check if the value contains only digits

        if ( (isValid || value === "")  ) {
            setExpiryYear(value); // Update the CVV state with the validated value
            setExpiryYearState(value); // Update the CVV state without spaces
        }
    };

    return(
        <div className='form-container'>


            <div className={'form-container_cardholder-name'}>
                <p>CARDHOLDER NAME</p>
               <input placeholder={'e.g. Jane Appleseed'} onChange={handleCardholderNameChange} value={cardholderName}/>
            </div>


            <div className={'form-container_card-number'}>
                <p>CARD NUMBER</p>
                <input  maxLength={'19'} placeholder={'e.g. 1234 9999 2222 0000'}  onChange={handleCardNumberChange} value={cardNumber} />
            </div>


            <div className={'form-container_credentials'}>

                <div className={'form-container_credentials_expiry-container'}>
                    <p>EXP. DATE(MM/YY)</p>
                    <div className={'form-container_credentials_expiry-container_month-year'}>
                        <input  maxLength={'2'} placeholder={'MM'} onChange={handleMonthChange} value={expiryMonth}/>
                        <input  maxLength={'2'} placeholder={'YY'} onChange={handeYearChange} value={expiryYear}/>
                    </div>

                </div>

                <div className={'form-container_credentials_ccv'}>
                        <p>CCV</p>
                        <input maxLength={'4'} placeholder={'e.g. 123'} onChange={handleCvvChange} value={ccv} />
                </div>

            </div>

            <Button onClick={onSubmit}/>


        </div>

    );


}

export default CardForm
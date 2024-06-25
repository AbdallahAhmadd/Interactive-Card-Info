import './mainpage.css'
import LeftImage from '../assets/bg-main-desktop.png'
import Cards from "../components/Cards/Cards.jsx";
import Form from "../components/CardForm/Form.jsx";
import React from "react";
import ThankYou from "../components/ThankYou/ThankYou.jsx";
function MainPage(){
    const [cardNumber, setCardNumber] = React.useState('0000 0000 0000 0000');
    const [expiryMonth, setExpiryMonth] = React.useState('00');
    const [expiryYear, setExpiryYear] = React.useState('00');
    const [cardholderName, setCardholderName] = React.useState('FULL NAME');
    const [ccv,setCcv] = React.useState('000');
    const[isConfirmed, setIsConfirmed] = React.useState(false);


   function handleConfirm(isValid){
       if(isValid){
           setIsConfirmed(true);
           console.log('Card details are confirmed')
       }
       else{
           setIsConfirmed(false)
           console.log('Card details are not confirmed')
       }


   }
    function handleContinue() {
        setIsConfirmed(false);
        setCardNumber('0000 0000 0000 0000');
        setExpiryMonth('00');
        setExpiryYear('00');
        setCardholderName('FULL NAME');
        setCcv('000');
    }


return(
    <div className={'main-page-container'}>

        <div className="left-image" >
            <img src={LeftImage} alt="left-image" />
        </div>


        <div className={'cards-container'}>
            <Cards

                cardNumber={cardNumber}
                ccv={ccv}
                cardholderName={cardholderName}
                expiryYear={expiryYear}
                expiryMonth={expiryMonth}/>
        </div>



        <div className={'card-form-container'}>
            {!isConfirmed ? (
                <Form
                    setExpiryMonth={setExpiryMonth}
                    setExpiryYear={setExpiryYear}
                    setCardNumber={setCardNumber}
                    setCardholderName={setCardholderName}
                    setCcv={setCcv}
                    onSubmit={handleConfirm}
                />
            ) : (
                <ThankYou onContinue={handleContinue} />
            )}
        </div>

    </div>
)
}

export default MainPage
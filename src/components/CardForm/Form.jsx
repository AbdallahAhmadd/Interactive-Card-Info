import './form.css'
import Button from "../Button/button.jsx";


function CardForm({setCardNumber, setExpiryMonth, setCardholderName, setCcv,setExpiryYear}){


    return(
        <div className='form-container'>


            <div className={'form-container_cardholder-name'}>
                <p>CARDHOLDER NAME</p>
               <input placeholder={'e.g. Jane Appleseed'} onChange={(e)=>setCardholderName(e.target.value)}/>
            </div>


            <div className={'form-container_card-number'}>
                <p>CARD NUMBER</p>
                <input placeholder={'e.g. 1234 9999 2222 0000'} onChange={(e)=>setCardNumber(e.target.value)}/>
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

            <Button/>


        </div>

    );


}

export default CardForm
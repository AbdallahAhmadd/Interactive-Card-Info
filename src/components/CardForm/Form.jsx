import './form.css'
import Button from "../Button/button.jsx";

function CardForm(){

    return(
        <div className='form-container'>


            <div className={'form-container_cardholder-name'}>
                <p>CARDHOLDER NAME</p>
               <input placeholder={'e.g. Jane Appleseed'}/>
            </div>


            <div className={'form-container_card-number'}>
                <p>CARD NUMBER</p>
                <input placeholder={'e.g. 1234 9999 2222 0000'}/>
            </div>


            <div className={'form-container_credentials'}>

                <div className={'form-container_credentials_expiry-container'}>
                    <p>EXP. DATE(MM/YY)</p>
                    <div className={'form-container_credentials_expiry-container_month-year'}>
                        <input placeholder={'MM'}/>
                        <input placeholder={'YY'}/>
                    </div>

                </div>

                <div className={'form-container_credentials_ccv'}>
                        <p>CCV</p>
                        <input placeholder={'e.g. 123'}/>
                </div>

            </div>

            <Button/>


        </div>

    );


}

export default CardForm
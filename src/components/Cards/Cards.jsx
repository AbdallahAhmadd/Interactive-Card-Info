import './card.css'
import FrontCard from "./FrontCard.jsx";
import BackCard from "./BackCard.jsx";

function Cards({ cardNumber, ccv, expiryYear, cardholderName,expiryMonth }){

    return(

            <div className={'two-cards-holder'}>
                <div >
                    <FrontCard cardNumber={cardNumber} cardholderName={cardholderName} expiryYear={expiryYear} expiryMonth={expiryMonth}/>
                </div>
                <div style={{marginLeft:'100px'}}>
                    <BackCard ccv={ccv}/>
                </div>
            </div>


    );
}

export default Cards
import './thankyou.css'
import Complete from '../../assets/icon-complete.svg'
import Button from "../Button/button.jsx";
function ThankYou({onContinue}) {
  return (
    <div className="thank-you-container">
        <img src={Complete} alt={'tick sign'}/>
        <h1>THANK YOU!</h1>
        <p>We&apos;ve added your card details</p>
        <div className={'button-container'}>
            <Button text="Continue" onClick={onContinue}/>
        </div>

    </div>
  )
}

export default ThankYou
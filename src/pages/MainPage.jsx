import './mainpage.css'
import LeftImage from '../assets/bg-main-desktop.png'
import Cards from "../components/Cards/Cards.jsx";
import Form from "../components/CardForm/Form.jsx";
function MainPage(){
return(
    <div className={'main-page-container'}>

        <div className="left-image" >
            <img src={LeftImage} alt="left-image" />
        </div>


        <div className={'cards-container'}>
            <Cards/>
        </div>


        <div className={'card-form-container'}>
            <Form/>
        </div>

    </div>
)
}

export default MainPage
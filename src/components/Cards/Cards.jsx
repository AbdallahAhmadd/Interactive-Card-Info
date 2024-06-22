import './card.css'
import FrontCard from "./FrontCard.jsx";
import BackCard from "./BackCard.jsx";

function Cards(){
    return(

            <div className={'two-cards-holder'}>
                <div >
                    <FrontCard/>
                </div>
                <div style={{marginLeft:'100px'}}>
                    <BackCard/>
                </div>
            </div>


    );
}

export default Cards
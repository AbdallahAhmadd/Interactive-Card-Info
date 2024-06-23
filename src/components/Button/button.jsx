import './button.css'

function Button({text='Confirm',onClick}){

    return(
        <button className='button' onClick={onClick}>
            {text}
        </button>

    );

}

export default Button
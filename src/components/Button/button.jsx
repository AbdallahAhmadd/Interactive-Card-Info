import './button.css'

function Button(props){
    // eslint-disable-next-line react/prop-types
   const {text = 'Confirm'} = props;

    return(
        <button className='button'>
            {text}
        </button>

    );

}

export default Button
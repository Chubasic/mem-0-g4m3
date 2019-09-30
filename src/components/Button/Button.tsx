import React, { Dispatch, FunctionComponent } from 'react';
import './Button.scss';

interface ButtonPropTypes {
    btnText: string;
    onClickAction: (a?: any) => any | Dispatch<any>;
    dispatchAction?: string;
}


const Button: FunctionComponent<ButtonPropTypes> = ({ btnText, onClickAction, dispatchAction }) => {
    function handleCkick() {
        onClickAction(dispatchAction);
    }
    return (
        <button className='Button' onClick={handleCkick}>
            {btnText}
        </button>
    );
};

export default Button;

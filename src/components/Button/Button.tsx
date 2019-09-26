import React, { Dispatch, SetStateAction, FunctionComponent } from 'react';
import './Button.scss';

interface ButtonPropTypes {
    btnText: string;
    onClickAction: () => any | Dispatch<SetStateAction<any>>;
}

const Button: FunctionComponent<ButtonPropTypes> = ({ btnText, onClickAction }) => {
    return (
        <button className='Button' onClick={onClickAction}>
            {btnText}
        </button>
    );
};

export default Button;

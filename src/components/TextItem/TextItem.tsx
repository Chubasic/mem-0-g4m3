import React, { FunctionComponent } from 'react'
import './TextItem.scss';

interface TextItemPropTypes {
    headingText: string;
    text: string;
}

const TextItem: FunctionComponent<TextItemPropTypes> = ({ headingText, text }) => {
    return (
        <div className='TextItem'>
            <h4>{headingText}: <p>{text}</p></h4>
        </div>
    )
}

export default TextItem

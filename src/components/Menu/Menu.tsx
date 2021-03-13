import React, { FunctionComponent } from 'react';
import './Menu.scss';

interface MenuPropTypes {
    headingText: string;
    children: JSX.Element[] | JSX.Element;
}

const Menu: FunctionComponent<MenuPropTypes> = ({ headingText, children }) => {
    return (
        <div className='Menu'>
            <h2>{headingText}</h2>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Menu;

import React from 'react';
import Option from './Option';

const Options = (props) => {
    return(
        <div>
            <div className='widget-header'>
                <h3 className= 'widget-header__title'>Your Options</h3>
                <button
                    className= 'button button--link' 
                    onClick={props.handleRemoveOptions}
                >Remove All</button>
            </div>
            {props.options.length === 0 && <p className= 'widget__messege'>Please add option to get started</p>}
            <div className= 'options'>
                {props.options.map((option, index) =>
                    <Option 
                        key={option}
                        optionText={option}
                        index={index}
                        handleDeleteOption={props.handleDeleteOption} 
                    />)}
            </div>
        </div>
    );
};

export default Options;
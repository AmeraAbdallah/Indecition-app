import React from 'react';

const Action = (props) => {
    return(
        <button
        className= 'big-button'
            onClick={props.handlePickOption}
            disabled={!props.hasOptions}
        >what should I do ?</button>
    );
};

export default Action ;
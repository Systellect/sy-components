import React from 'react';
import PropTypes from 'prop-types';


/**
 * Component that allows interaction with any DOM element. 
 *
 * @param {*} {message}
 * @returns
 */
function Interaction({message}){
    return <div>Hello {message}</div>
}

Interaction.propTypes = {
   /** Message to display */ 
   message: PropTypes.string
};

Interaction.defaultProps = {
    message: 'World'
};

export default Interaction;
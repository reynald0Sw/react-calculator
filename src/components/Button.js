import React from 'react';
import '../styles/Button.css';


function Button(props) {

  const isOperator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=');
  };

  if(isOperator(props)){

  }

  return (
    <button 
      className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
      onClick={() => props.handleClick(props.children)}>
      { props.children }

    </button>
  );
}
 export default Button;
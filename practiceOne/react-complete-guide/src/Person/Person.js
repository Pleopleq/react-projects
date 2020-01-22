import React from 'react';

const person = (props) => {
    return(
        <div>
            <p>Hey soy {props.name}, tengo {props.age} años y estoy haciendo cosas en React 
            y tengo {Math.floor(Math.random() * 30)} meses haciendo web dev</p>
            <p>{props.children}</p>
        </div>
    ) 
}

export default person;
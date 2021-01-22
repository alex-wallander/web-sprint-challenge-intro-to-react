// Write your Character component here
import React from 'react';

export default function Character(props) {
    return(
        <div>
            <h2>{props.name}</h2> <button>{props.birth_year}</button>
        </div>
    )
}
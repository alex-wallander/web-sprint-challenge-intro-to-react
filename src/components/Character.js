// Write your Character component here
import React from 'react';
import styled from 'styled-components'

export default function Character(props) {
    return(
        <CharStyling className='data'>
            <NameStyling>{props.details.name}</NameStyling> <BirthStyling>{props.details.birth_year}</BirthStyling>
        </CharStyling>
    )
}

const CharStyling = styled.div `
 border: 1px solid green;
 display:flex;
 justify-content:space-between;
 margin-left: 15%;
 margin-right: 15%;
 margin-bottom: 15px;
 `;

 const NameStyling = styled.h2`
 padding:20px;
 `;
const BirthStyling = styled.h3`
    text-align: right;
    margin-right: 15%;
    padding-top: 5px;
    border: 1px solid gray;
    border-radius: 25px;
    padding-right: 8px;
    padding-left: 8px;
    padding-top: 4%;
    background-color: gray;
    color: purple;
`;
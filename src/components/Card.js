import React, {Component} from 'react'
import ReactDom from 'react-dom'



const Card = ({name, email, Image}) => {

        return (
            <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img height="100px" src={Image}/>
            <div>
            <h2>{name}</h2>
            <h3>{email}</h3>
            </div>
            </div>

        );


    }


    export default Card

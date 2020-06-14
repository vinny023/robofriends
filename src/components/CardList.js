import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card';


const CardList = ({ data }) => {

return (
    <div>
    {
        data.map((entry,i) => {
            // {Name, Contact, Image} = entry
            return <Card key={i} name={entry.name} email={entry.email} Image={entry.image}/>
        })
    }
    </div>
)
}

export default CardList

import React from 'react';


const AvatarList =(props) =>{
    return(
        <div className="avatarstyle ma4 bg-light-purple dib pa4 tc grow shadow-4">
        <img src="https://joeschmoe.io/api/v1/female/random" alt="Avatar"/>
        <h1>{props.name}</h1>
        <p>{props.work}</p>
        </div>

    )
    }
export default AvatarList;
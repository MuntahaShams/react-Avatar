import React from 'react';
import './Avatar.css';
import 'tachyons';
import AvatarList from './AvatarList';

const Avatar = (props) => {

    const AvatarListArray =[
        {
            id:1,
            name:"Muntaha",
            work:"Web developer"
        },
        {
            id:2,
            name:"Zeenat",
            work:"Electronic Engineer"
        },
        {
            id:3,
            name:"Faryal",
            work:"AI Engineer"
        },
        {
            id:4,
            name:"Zunaira",
            work:"Electronic Engineer"
        }
    ]

const arrayAvatarCard= AvatarListArray.map( (Avatarcard,i)  => {

   return <AvatarList key={i} id={AvatarListArray[i].name}
        name={AvatarListArray[i].name}
        work={AvatarListArray[i].work}/>
} )

    return (
        <div>
        <h1 className="tc"> Welcome to Avatar World</h1>
            {arrayAvatarCard}
    <button>do you like it</button>
    </div>
    )
}
export default Avatar;
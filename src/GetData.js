import React from 'react';

import photo from './photo.jpeg'
function GetData({personne}){
    const  al= ()=> {alert("hello")}
    return(
       // const  al= ()=> {alert("hello")}
        <div>
            <table>
                <tr>
                <th>NAme</th>
                <th>Email</th>
                <th>Age</th>
                </tr>
                {personne.map(per=>
                    <tr> 
                        <td>{per.name}</td>
                <td>{per.email}</td>
                <td>{per.age}</td>
                    </tr>)}
            </table>
            <img src={photo} alt="" />
            {al()}
        
        </div>
    )
}
export default GetData;
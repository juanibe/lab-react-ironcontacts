import React from 'react';
import contacts from './contacts.json'

const Contacts = (props) => {
    return(
          
        <tr>
          <td><img src={props.pictureUrl}/></td>
          <td>{props.name}</td>
          <td>{props.popularity}</td>
          <td><button onClick={props.clickToDelete}>Delete</button></td>
    </tr>
    

    )
}

export default Contacts;

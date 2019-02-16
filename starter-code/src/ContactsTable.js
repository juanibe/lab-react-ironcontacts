import React, { Component } from 'react';
import contacts from './contacts.json'
import Contacts from './Contacts'
import './App.css';

class ContactsTable extends Component {
    constructor(){
        super()
        this.state = {
            contacts : contacts.slice(0,5)

        }
        
    }

    addRandomContact = () => { 
        let newState = this.state.contacts
        let randomContact; 

        do{
            randomContact = contacts[Math.floor(Math.random()*contacts.length)]
        }while(newState.includes(randomContact)&&newState.length<contacts.length)
            newState.push(randomContact)
        this.setState({contacts:newState})

    }

    sortByName = () => {
        let newState = this.state.contacts
        newState.sort((a,b)=>{return a.name.localeCompare(b.name)})
        this.setState({contacts:newState})
    }

    sortByPopularity = () => {
        let newState = this.state.contacts
        newState.sort((a,b)=>{return a.popularity - b.popularity})
        this.setState({contacts:newState})
    }
    

    deleteContact = (index) => {
        let newState = this.state.contacts
        newState.splice(index,1)
        this.setState({contacts:newState})
    }


    render() {
        const items = this.state.contacts.map((c,index)=>{
            return (
                <Contacts key={index} {...c} clickToDelete={()=>{this.deleteContact(index)}}/>
              );
        })
    return (
        <div> 
            <button onClick={()=>{this.addRandomContact()}}>Add Random Contact</button>
            <button onClick={()=>{this.sortByPopularity()}}>Sort By Popularity</button>
            <button onClick={()=>{this.sortByName()}}>Sort Contacts</button>
    
                <table id="contacts">
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>    
                </table>
        </div>

    )
  }
}

export default ContactsTable;

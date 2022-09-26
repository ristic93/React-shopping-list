import {React, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from'./Form.module.css';


const Form = ({setGroceries}) => {

    const [name, setName] = useState('');

    const formSubmit = (event) => {
        event.preventDefault();

        let newGrocery = {
            id: uuidv4(),
            name: name
        };

        if(name === '') {
            alert('First you must add your grocery!')
        } else {
            setGroceries((prevValue) => {
                return [...prevValue, newGrocery];
    
            });
        }


        setName('');

        event.target.name.focus();
    }

  return (
    <div className={styles.container}>
        <form onSubmit={formSubmit}>
            <label htmlFor="">Enter a grocery: </label>
            <br/>
            <input type="text" name='name' placeholder='ex: snacks' value={name} onChange={(event) => {setName(event.target.value)}}/>
            <button><i className="fas fa-cart-plus"></i></button>
        </form>
    </div>
  )
}

export default Form;
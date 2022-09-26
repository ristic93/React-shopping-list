import {React, useState, useEffect} from 'react';
import styles from'./Edit.module.css';

const Edit = ({editMode, setEditMode, groceries}) => {

    const [name, setName] = useState('');

    useEffect(() => {
        setName(editMode.name);
    }, [editMode])

    const exitEditMode = () => {
        setEditMode({mode:false, id:'', name: ''})
        setName('');
    }

    const saveEditMode = () => {
        let tempGroceries = [...groceries];
        tempGroceries.forEach((grocery, idx) => {
            if(editMode.id === grocery.id) {
                tempGroceries[idx].name = name;
            }
        })

        setEditMode({mode:false, id:'', name: ''})
        setName('');
    }

  return (
    <div className={styles.container}>
         <div className='forma'>
            <label htmlFor="">Edit your grocery: </label>
            <br/>
            <input type="text" name='name' placeholder='ex: snacks' value={name} onChange={(event) => {setName(event.target.value)}}/>
            <button className={styles.editBtn} onClick={saveEditMode}><i className="fas fa-check"></i></button>
            <button className={styles.deleteBtn} onClick={exitEditMode}><i className="fas fa-backspace"></i></button>
        </div>
    </div>
  )
}

export default Edit;
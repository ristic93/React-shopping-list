import React from 'react';
import styles from './Cart.module.css';

const Cart = ({groceries, setGroceries, setEditMode}) => {

const removeItem = (idx) => {
  let tempGrocery = [...groceries];
  tempGrocery.splice(idx, 1);
  setGroceries([...tempGrocery]);
}

const editGrocery = (idx) => {
  setEditMode({
    mode:true,
    id: groceries[idx].id,
    name: groceries[idx].name
})
}

  return (
    <div className={styles.container}>
        <div className={styles.list}>
        <h2>Groceries list</h2>
        <table>
            <tbody>
              {groceries.map((grocery, idx) => {
                return (
                        <tr key={grocery.id}>
                            <td>{idx + 1}. {grocery.name}</td>
                            <td><button className={styles.editBtn} onClick={() => {editGrocery(idx)}}><i className="fas fa-edit"></i></button></td>
                            <td><button className={styles.deleteBtn} onClick={() => {removeItem(idx)}}><i className="fas fa-trash"></i></button></td>
                        </tr>
                        )
              })}
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Cart;
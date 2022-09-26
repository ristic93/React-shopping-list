import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Cart from './components/Cart';
import Edit from './components/Edit';
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  const [editMode, setEditMode] = useState({mode:false, id:'', name: ''})

  const [groceries, setGroceries] = useState([
      // {
      //   id: uuidv4(),
      //   name: 'Kikiriki'
      // },
      // {
      //   id: uuidv4(),
      //   name: 'Pivo'
      // },
      // {
      //   id: uuidv4(),
      //   name: 'Cips'
      // },
  ]);

  // console.log(groceries);
  console.log(editMode);

  return (
    <div className="App">
        <h1>Shopping List</h1>
        {
          !editMode.mode 
          ?
          <Form setGroceries={setGroceries}></Form>
          :
          <Edit groceries={groceries} editMode={editMode} setEditMode={setEditMode}></Edit>
        }
        <Cart groceries={groceries} setGroceries={setGroceries} setEditMode={setEditMode}></Cart>
    </div>
  );
}

export default App;

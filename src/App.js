
import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';


import { useState, useEffect } from "react";



function App() {




  // const [items, setItems] = useState([
  //   {
  //     id: 1,
  //     checked: true,
  //     itemE: "One half pound bag of Coca Covered Almonds Unsalted"
  //   },
  //   {
  //     id: 2,
  //     checked: false,
  //     itemE: "Item 2"
  //   }
  // ]);

  let today = new Date();

  //pulling items list from a local storage
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);
  //const [items, setItems] = useState(JSON.parse(itemsDB)||[]);
  // const [items, setItems] = useState([]);


  //console.log('localStorage ', today.getMilliseconds() ,localStorage.getItem('shoppinglist'));

  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');




  console.log('before useEffect');
  useEffect(() => {
    console.log('useEffect items changed ', today.getSeconds());
    localStorage.setItem('shoppinglist', JSON.stringify(items));

  }, [items]);    //it only runs if items array is changed
  console.log('after useEffect');


  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    //localStorage.setItem('shoppinglist', JSON.stringify(newItems)); //moved to useEffect
  }

  const addItem = async (item) => {
    //dave way
    const id = items.length ? items[items.length - 1].id + 1 : 1;

    const myNewItem = { id: id, checked: false, itemE: item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }




    //my way,  but it add to the top of the list
    //  items.unshift(
    //   {
    //     id: items.length+1,
    //     checked: false,
    //     itemE: newItem
    //   }
    // )
    // setItems( items); 
  }

  const handleCheck = async (id) => {
    console.log(`key: ${id}`)
    const listItems = items.map((item) => item.id === id ?
      { ...item, checked: !item.checked } : item);
    console.log('handleCheck ', listItems);
    setAndSaveItems(listItems);

    const myItem = listItems.filter(el => el.id === id);

    const patchOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: myItem[0].checked })
    };

  }

  const handleDelete = async (id) => {
    console.log(`delete key: ${id}`)
    const items1 = items.filter(el => el.id !== id);
    // items.splice(id-1,1);
    const listItems = items1.map(el => el)
    //  console.log('delete ',listItems);
    setAndSaveItems(listItems);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit button clicked e: ', e);
    console.log('Submit newItem: ', newItem);
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="App">
      <Header title="Grocery list" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <SearchItem
        search={search}
        setSearch={setSearch}
      />

      <main>

        <Content
          items={items.filter(el => ((el.itemE).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />

      </main>


      <Footer
        list={items.length} />
    </div>
  );
}
export default App;

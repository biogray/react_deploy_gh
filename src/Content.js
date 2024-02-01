
import './index.css';
import { FaBeer, FaPencilAlt } from 'react-icons/fa';

import ItemList from './ItemList';
import AddItem from './AddItem';

 const Content = ({items, handleCheck, handleDelete}) => {

function say (a) {
  console.log('Achtung , the list is empty')
  return `Achtung from function say(). List: ${a}`;
};

  return (
    <>        
        { items.length ? (

            <ItemList 
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            />

        )  : ( 
           <div>
              <p>{say( items.length)} </p>
              <p style={{marginTop: '2rem'}}> Your list is empty. </p>
           </div>
          )
        }




        <div><br /></div>
        <div><br /></div>
        <div><br /></div>
        <div><br /></div>
        
        {/* <ul>
            {items.map( (el) => (
                  <li  className="item" key={el.id}>
                  <input 
                    type="checkbox"
                    onChange={ ()=> handleCheck(el.id) }
                    checked={el.checked}
                    />
                  <label>{el.item }</label>  
                    <FaBeer 
                    role="button"
                    tabIndex="0"
                    />           
                  </li>
            ))}
        </ul> */}


        <div>
           <br /> 
           Have a beer no? {`gtag ${{secrets.NEXT_PUBLIC_GOOGLE_ANALYTICS}}`}  
           <FaBeer />
           <FaPencilAlt />
        </div>
        
       </>
  )
}

export default Content





import { FaTrashAlt } from 'react-icons/fa';


const LineItem = ({ handleCheck, handleDelete, item }) => {

  return (
    
       <li className="item"  >
              <input
                     type="checkbox"
                     onChange={ () => {handleCheck(item.id)}  }
                     checked={item.checked}
              />
              <label
              style={(item.checked) ? { textDecoration: 'line-through'} : null}
              onDoubleClick={ () => {handleCheck(item.id)}  }
              >
                     {item.itemE}
              </label>
              
              <FaTrashAlt 
                     role="button" 
                     tabIndex="0"
                     aria-label={`Delete ${item.itemE}`}
                     onClick={ () => {handleDelete(item.id)}  }
              />
       </li>

  )
}

export default LineItem


import './App.css';
import { useState } from 'react';
function App() {
      const [inputList,setInputList]=useState("");
      const[ Items,setItems]=useState([]);
      const[ count,setconter]=useState(0);
      
       const itemEvent=(event)=>{
            setInputList(event.target.value);
               
      };

    

      const listOfItem=()=>{
        setItems((oldItems) =>{
          return[...oldItems,inputList]
        });
         setInputList("");
      };

      
      
    const deleteItems=(id)=>{
      setItems((oldItems)=>{
        return oldItems.filter((errlem,index)=>{
           return index!== id;
        })
          
        })
    
      }
    
    
        
      
      return (
       <>
       
        <div className="todolist">
        
           <div className="todo">
            <h1> task{count}</h1>
            <input type='text' placeholder='Add a Item'value={inputList} 
           onChange={itemEvent}/>
           
            <button  onClick={listOfItem} className='bu'>Add</button>
             <button onClick={()=>setconter(count+1)}>count</button>
          
        <ol>
          
    
        { Items.map((val,index)=>{
          return(
            <div className='output'>
            <li>
             

             <button onClick={()=>deleteItems(index)}>Delete</button>
              
              {val} 


             </li>
             </div>
          )
            })}
      
  
       </ol>
          </div>
        </div>
        </>
      );
    }
    
    
    export default App;
    


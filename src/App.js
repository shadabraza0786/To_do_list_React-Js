import React, { useState } from 'react';
import TodoList from "./components/TodoList";


function App() {
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    const changeItem = (e) =>{
        setInputList(e.target.value);
    }

    const listOfItems = () =>{
        setItems((oldItems) =>{
            return [...oldItems, inputList];
        });
        setInputList("");
    };

        const deleteItems = (id) =>{
            console.log("delete")
            setItems((oldItems)=>{
                return oldItems.filter((arrElem, index) =>{
                    return index !== id;
                });
            });
        }

    return (
        <div className="main_div">
            <div className="center_div">
                <h1>List of Items</h1>
                <input type="text" placeholder="Add a Item" value={inputList} onChange={changeItem} />
                <button className="firstbtn" onClick={listOfItems}> + </button>
                <ol>
                    {items.map((itemvalue, index) => {
                        return(
                            <TodoList key={index} id={index} text={itemvalue} onSelect={deleteItems}/>
                        );
                        
                    })}
                </ol>
            </div>
        </div>
    );
}
export default App;

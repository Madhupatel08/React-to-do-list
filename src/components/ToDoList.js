import React, { Component } from 'react'
import ToDoItem from './ToDoItem';
import TodoItem from './ToDoItem';
export default class ToDoList extends Component {
    render() {
        const{items,clearList,handleDelete,handleEdit} = this.props 
        return (
          <ul className="list-group my-5">
            <h3 className="text-captalize text-center text-white">My ToDo List</h3>
            {
                items.map(item=>{
                    return(
                        <ToDoItem key = {item.id} title ={item.title}
                        handleDelete={() => handleDelete(item.id)}
                        handleEdit={() => handleEdit(item.id)}
                        />
                    )
                })
            }
            

            <button className="btn btn-danger btn-block text-captalize mt-5"
            onClick={clearList}
            > clear list</button>  
          </ul>
         
        );
    }
}

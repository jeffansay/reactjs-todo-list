import React, { Component } from 'react';
import uuid from 'uuid'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

class App extends Component {
  state = {
    items: [
      {id: 1 ,title: 'wake up'},
      {id: 2 ,title: 'make breakfast'},
      {id: 3 ,title: 'brush teeth'},
    ],
    id:uuid(),
    item: '',
    editItem: false
  }

  handleChange = (e) => {
    console.log('handleChange')
  }
  handleSubmit = (e) => {
    console.log('handleSubmit')
  }
  handleDelete = (id) => {
    console.log(`handle delete ${id}`)
  }
  handleEdit = (id) => {
    console.log(`handle edit ${id}`)
  }
  clearList = (e) => {
    console.log('Clear List')
  }

  render() {
    console.log(this.state, '--uuid')
    return (
      <div className="container">
          <div className="row">
              <div className="col-10 mx-auto col-md-8 mt-4">
                  <h3 className="text-capitalize text-center">Todo Input</h3>
                  <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
                  <TodoList items={this.state.item} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
              </div>
          </div>
        </div>

      
    );
  }
}

export default App;

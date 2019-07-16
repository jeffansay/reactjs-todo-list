import React, { Component } from 'react';
import uuid from 'uuid'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

class App extends Component {
  state = {
    items: [],
    id:uuid(),
    item: '',
    editItem: false
  }

  handleChange = (e) => {
      this.setState({
        item: e.target.value
      })
 
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const newItem = {
      id: this.state.id,
      title: this.state.item
    }

    const updateItems = [...this.state.items, newItem]

    this.setState({
      items: updateItems,
      item: '',
      id: uuid(),
      editItem: false
    })
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
    console.log(this.state)
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

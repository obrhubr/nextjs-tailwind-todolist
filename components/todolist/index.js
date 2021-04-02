import React, { Component } from 'react'
import Item from './item'

export default class extends Component {
	constructor(props) {
		super(props)

		this.state = {
			todo_list: [
				{ title: 'lorem ipsum dolor sit amit', complete: false, id: 1 },
				{ title: 'Do Laundry', complete: false, id: 2 },
				{ title: 'Do Dishes', complete: false, id: 3 }
			]
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const todo_list = this.state.todo_list
    todo_list.push({
      title: document.getElementById('todo-title').value,
      complete: false,
      id: todo_list[todo_list.length - 1] + 1
    })

    this.setState({ todo_list })
  }

	render() {
		return (
			<div className="container">
                <div className="text-black rounded bg-white px-10 py-10">
                    <div className="text-black py-2 rounded bg-gray-200 my-4 px-10 shadow-2x flex flex-row flex-wrap">
                        <input className="bg-white-400 rounded px-3 py-2 flex-grow mx-4" type="text" placeholder="Add item" id="todo-title"/>
                        <input className="bg-blue-400 rounded px-5 py-2 mx-4" type="submit" onClick={this.handleClick} />
                    </div>
                    
                    <div className="bg-blue-600 py-2 rounded px-10 my-4 shadow-2xl">
                        {this.state.todo_list.map(x => <Item title={x.title} complete={x.complete} key={x.id} />)}
                    </div>
                </div>
			</div>
		)
	}
}
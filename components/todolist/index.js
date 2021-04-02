import React, { useState } from 'react';
import Item from './item';
import { useQuery, gql, useMutation } from "@apollo/client";

const QUERY_ALLTODO = gql`
  	query  {
		getToDos {
			title
			id
		}
  	}
`;

const MUTATION_ADDTODO = gql`
	mutation createToDO($title: String!) {
		createToDo(toDoInput: {title: $title, complete: false}) {
			id
		}
	}
`

export default function TodoList () {
	const [addTodo, { adddata }] = useMutation(MUTATION_ADDTODO);

	const { data, loading, error } = useQuery(QUERY_ALLTODO);
	if (loading) {
		return <h2>Loading...</h2>;
	}
	if (error) {
		console.error(error);
		return null;
	}

	const handleClick = () => {
		addTodo({ variables: { title: document.getElementById('todo-title').value }});

		var todo_list = []
		todo_list.push({
			title: document.getElementById('todo-title').value,
			complete: false,
			id: "test"
		})
		
	}

	return (
		<div className="container">
			<div className="text-black rounded bg-white px-10 py-10">
				<div className="text-black py-2 rounded bg-gray-200 my-4 px-10 shadow-2x flex flex-row flex-wrap">
					<input className="bg-white-400 rounded px-3 py-2 flex-grow mx-4" type="text" placeholder="Add item" id="todo-title"/>
					<input className="bg-blue-400 rounded px-5 py-2 mx-4" type="submit" onClick={handleClick} />
				</div>
				
				<div className="bg-blue-600 py-2 rounded px-10 my-4 shadow-2xl">
					{data.getToDos.map(x => <Item title={x.title} complete={x.complete} key={x.id} todoid={x.id}/>)}
				</div>
			</div>
		</div>
	)
}
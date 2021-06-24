import React from 'react'
import PropTypes from 'prop-types'
import {CustomInput,Button,Table} from 'reactstrap'

const RowItem=({todo,toggleSelect,toggleComplete})=>(
    <tr>
        <th scope='row'>
            <CustomInput
                type='checkbox'
                id={todo.id}
                checked={todo.isSelect}
                onChange={()=>toggleSelect(todo.id)}
            />
        </th>
        <th>
            {todo.time.toDateString()}
        </th>
        <th>{todo.text}</th>
        <th>
            <Button onClick={()=>toggleComplete(todo.id)} color={todo.isComplete ? 'danger' : 'success'}>
                {todo.isComplete ? 'Completed' : 'Running'}
            </Button>
        </th>
    </tr>
)

RowItem.propTypes={
    todo: PropTypes.object.isRequired,
    toggleSelect:PropTypes.func.isRequired,
    toggleComplete:PropTypes.func.isRequired
}

const TableView=({todos,toggleSelect,toggleComplete})=>(
    <Table>
        <thead>
            <tr>
                <th>#</th>
                <th>Time</th>
                <th>Todo</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
             todos.map(todo=>(
                 <RowItem
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    toggleSelect={toggleSelect}
                 />
                ))   
            }
        </tbody>
    </Table>
)

TableView.propTypes={
    todos: PropTypes.array.isRequired,
    toggleSelect:PropTypes.func.isRequired,
    toggleComplete:PropTypes.func.isRequired
}

export default TableView
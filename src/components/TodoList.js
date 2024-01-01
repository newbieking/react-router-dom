export default function TodoList({ todoList }) {
    const todoItems = todoList.map(todo =>
        <li key={todo.id} className="list-group-item list-group-item-action">
            <div className="container text-center">
                <div className="row align-items-start">
                    <div className="col">
                        {todo.title}
                    </div>
                    <div className="col">
                        {todo.createTime.toLocaleString()}
                    </div>
                    <div className="col">
                        {todo.deadLine.toLocaleString()}
                    </div>
                </div>
            </div>
        </li>
    )
    return (
        <ul className="todo-list list-group">
            {todoItems}
        </ul>
    )
}
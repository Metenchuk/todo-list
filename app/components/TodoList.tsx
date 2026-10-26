import { TodoListProps } from "../types";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
    return (
        <ul className="mt-4">
            {todos.map((item) => (
                <li key={item.id}>
                    <TodoItem
                    todo={item}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    />
                </li>
                ))}
        </ul>
    )
}
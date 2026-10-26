import { Todo } from "../types";

export default function TodoCounter({ todos }: { todos: Todo[] }) {
    const countTasks = todos.filter(todo => !todo.completed).length

    return (
        <p className="text-sm text-gray-500 mt-4 text-center">
            Залишилось виконати: <span className="font-bold text-gray-700">{countTasks}</span>
        </p>
    )
}
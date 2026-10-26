import { TodoItemProps } from "../types"

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm mb-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-4 h-4 cursor-pointer"
      />
      <p className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
        {todo.text}
      </p>
      <button
        onClick={() => onDelete(todo.id)}
        className="p-1 rounded hover:bg-red-100 transition-colors cursor-pointer"
      >
        ❌
      </button>
    </div>
  )
}
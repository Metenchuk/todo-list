import { Todo } from "../types"

export const saveTodos = (todos: Todo[]): void => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

export const loadTodos = (): Todo[] => {
  const saved = localStorage.getItem('todos')
  return saved ? JSON.parse(saved) : []
}
'use client'

import { useState, useEffect } from "react"
import { Todo } from "./types"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import TodoCounter from "./components/TodoCounter"
import { saveTodos, loadTodos } from './lib/storage'

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [isLoading, setIsLoading] = useState(true)

  function handleAdd(text: string) {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: text,
      completed: false,
      createdAt: new Date()
    }
    setTodos(prev => [...prev, newTodo])
  }

  function handleToggle(id: string) {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  function handleDelete(id: string) {
    setTodos(prev => prev.filter(item => item.id !== id))
  }

  useEffect(() => {
    setTodos(loadTodos())
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (!isLoading) saveTodos(todos)
  }, [todos])

  if (isLoading) return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center">
      <p className="text-white">Завантаження...</p>
    </main>
  )

  return (
    <main className="min-h-screen bg-gray-900 py-10">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6 text-white">
          Список завдань
        </h1>
        <TodoForm onAdd={handleAdd} />
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
        <TodoCounter todos={todos} />
      </div>
    </main>
  )
}
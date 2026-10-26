import { useState } from "react"

export default function TodoForm({ onAdd }: { onAdd: (text: string) => void }) {
    const [value, setValue] = useState('')

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!value.trim()) return
        onAdd(value.trim())
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Нове завдання..."
                className="flex-1 px-3 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button type="submit" className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg">
                Додати
            </button>
        </form>
    )
}
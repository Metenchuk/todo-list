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
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
            />
            <button type="submit">Додати</button>
        </form>
    )
}
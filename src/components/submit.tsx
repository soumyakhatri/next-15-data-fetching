"use client"

import { useFormStatus } from "react-dom"

export default function Submit() {
    const { pending } = useFormStatus()
    return (
        <button
            type="submit"
            disabled={pending}
            className={`
                px-4 py-2 rounded-lg font-medium
                bg-blue-500 text-white
                hover:bg-blue-600 
                transition-colors duration-200
                disabled:opacity-50 disabled:cursor-not-allowed
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            `}
        >
            {pending ? 'Submitting...' : 'Submit'}
        </button>
    )
}

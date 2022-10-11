import React, { MouseEventHandler } from 'react'

interface Props {
    label: string;
    onClick: MouseEventHandler
}

export const Button = ({ label, onClick}: Props) => {
    return (
        <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={onClick}
        >
            {label}
        </button>
    )
}

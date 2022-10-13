import React, { MouseEventHandler } from 'react'

interface Props {
    label: string;
    onClick: MouseEventHandler,
    theme?: 'dark' | 'light'
}

export const Button = ({ label, onClick, theme = 'dark', ...rest}: Props) => {

    const getClasses = () => {
        let str = "inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 "
    
        if (theme === 'dark') {
            str += 'bg-indigo-600 hover:bg-indigo-700'
        } else {
            str += 'bg-orange-400 hover:bg-orange-500'
        }

        return str
    }

    return (
        <button
            type="submit"
            className={getClasses()}
            onClick={onClick}
            {...rest}
        >
            {label}
        </button>
    )
}

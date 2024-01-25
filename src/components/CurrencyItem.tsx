import React from "react"

export const CurrencyItem = (props: {name: String, exchanged: Number, Code: String}) => {
    const {name, exchanged, Code} = props

    return (
        <li className="flex h-12 justify-around items-center border-t-2 border-gray-700 hover:bg-gray-700 transition">
            <div className="w-60 hidden sm:block">{name}</div> 
            <div className="w-24 sm:w-36">{exchanged}</div>
            <div className="w-12 sm:24"> {Code}</div>
        </li>
    )
}
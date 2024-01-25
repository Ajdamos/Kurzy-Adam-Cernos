import React from "react"

export const Input = (props: {value: String, placeholder: String, setState: any}) => {
    const {value, placeholder, setState} = props

    return (
        <input className="w-80 text-center text-xl m-2 py-2 px-4 bg-gray-200 rounded border-blue-600 border-b-2 text-gray-700"
         value={value.toString()} 
         type="text"
         placeholder={placeholder.toString()}
         onChange={e => setState(e.target.value)} 
        /> 
    )
}
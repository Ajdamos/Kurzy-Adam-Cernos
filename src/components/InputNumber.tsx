import React from "react"

export const InputNumber = (props: {value: Number, placeholder: String, setState: any}) => {
    const {value, placeholder, setState} = props

    function handleAmountInput (input: Number) {
        if (value.toString().length > 8 && input >= value) return
        setState(input)
      }

    return (
        <input className="w-64 text-center text-xl m-2 py-2 px-4 bg-gray-200 rounded border-blue-600 border-4 appearance-none text-gray-700"
         value={value.toString()} 
         type="text"
         placeholder={placeholder.toString()}
         onChange={e => handleAmountInput(Number(e.target.value.replace(/\D/,'')))} 
        /> 
    )
}
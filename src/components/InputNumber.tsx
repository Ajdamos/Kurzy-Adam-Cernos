import React from "react"

export const InputNumber = (props: {value: Number, placeholder: String, setState: any}) => {
    const {value, placeholder, setState} = props

    function handleAmountInput (input: Number) {
        if (value.toString().length > 8 && input >= value) return
        setState(input)
      }

    return (
        <input className="w-64 h-10 text-center text-xl bg-gray-200 rounded border-blue-600 border-b-2 appearance-none text-gray-700"
         value={value.toString()} 
         type="text"
         placeholder={placeholder.toString()}
         onChange={e => handleAmountInput(Number(e.target.value.replace(/\D/,'')))} 
        /> 
    )
}
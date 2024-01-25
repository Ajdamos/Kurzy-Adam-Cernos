import React from 'react'
import DropDown from 'react-dropdown'
import 'react-dropdown/style.css';


export const Menu = (props: {options: any[], setState: any}) => {
    const {options, setState} = props
    return (
        <DropDown
          className="w-64 h-10 m-2 bg-blue-600 flex items-center justify-center rounded"  
          controlClassName='bg-blue-600 text-gray-200 border-0 b-blue-600 w-full'
          options={options} 
          onChange={e => setState(e.value)}
          value={options[0]} 
          placeholder="Select an option" 
        />
    )
}
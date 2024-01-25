import { useState } from "react";
import DropDown from 'react-dropdown'
import {DropdownOptions, CurrencyOptions} from "./Options"
import 'react-dropdown/style.css';
import useGetRates from "./useGetRates"
import React from "react";




function App() {
  const [currency, setCurrency] = useState<String>("CZK") //default currency is EUR, but it can be changed to any currency from the list
  const [amount, setAmount] = useState<Number>(100)
  const [filter, setFilter] = useState<String>("");
  const [bank, setBank] = useState<1|2|3|4|5|6>(1) //number between 1-6, kurzy.cz api can handle 6 different banks, default is 1
  const rates = useGetRates(bank)

  function Exchange (toCurrency: String) {
    if (!rates) return "Loading..."
    if (bank === 4 || bank === 5) return Number(amount * ((rates[currency].dev_prodej + rates[currency].dev_prodej) / 2) / ((rates[toCurrency].dev_prodej + rates[toCurrency].dev_prodej) / 2) / rates[currency].jednotka).toFixed(2)
    return Number((amount * rates[currency].dev_stred / rates[toCurrency].dev_stred / rates[currency].jednotka).toFixed(2))
  }
  return (
    <div className="flex flex-col">
      <div className="flex">
      <input
       value={amount.toString()} 
       type="text" //i know it should be number but i didn t like the arrows
       onChange={e => setAmount(Number(e.target.value.replace(/\D/,'')))} // /\D/ is regex for non-digit characters  rates.kurzy[currency]
       /> 
      <input
       value={filter.toString()} 
       type="text" //i know it should be number but i didn t like the arrows
       onChange={e => setFilter(e.target.value)} // /\D/ is regex for non-digit characters  rates.kurzy[currency]
       /> 
    <DropDown 
      className="w-64"
      options={DropdownOptions} 
      onChange={e => setBank(e.value)}
      value={DropdownOptions[0]} 
      placeholder="Select an option" />
    <DropDown 
      className="w-64"
      options={rates ? Object.keys(rates) : ["CZK"]} 
      onChange={e => setCurrency(e.value)} 
      value={rates ? Object.keys(rates)[0] : "CZK"} 
      placeholder="Select an option" />
    <button 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
      onClick={() => {console.log(bank, rates, amount)}}>asd</button>
    </div>

    <div>
      <ul>
        {rates ? Object.keys(rates).map((key) => {
          if(key === currency) return null
          return (
          <li key={key} className="flex w-64">
            <div className="w-36">{rates[key]?.nazev}</div> 
            <div className="w-16">{Exchange(key)}</div>
            <div className="w-12"> {key}</div>
          </li>
          )
          }) : "Loading..."}
      </ul>
    </div>
    </div>

  )
}

export default App

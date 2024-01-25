import React from "react";
import { CurrencyItem } from "./CurrencyItem";

export const CurrencyContainer = (props) => {
    const {rates, currency, Exchange, filter} = props

    function handleFilter (key: String) {
        return key.toUpperCase().includes(filter.toUpperCase()) || rates[key].nazev.toUpperCase().includes(filter.toUpperCase())
    }
    return (
    <ul className="w-96 h-2/3 text-lg b-2 b-blue-700 rounded p-2 overflow-y-auto md:h-3/4 md:w-2/3">
        {rates ? Object.keys(rates).map((key) => {
          if(key === currency || !handleFilter(key)) return null
          return <CurrencyItem key={key} name={rates[key].nazev} exchanged={Exchange(key)} Code={key}/>
          }) : "Loading..."}
      </ul>
    )
}
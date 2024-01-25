import React ,{ useState } from "react";
import {DropdownOptions} from "./Options"
import useGetRates from "./useGetRates"
import { CurrencyContainer } from "./components/CurrencyContainer";
import { Menu } from "./components/Menu";
import { Input } from "./components/Input";
import { InputNumber } from "./components/InputNumber";

function App() {
  const [currency, setCurrency] = useState<String>("CZK")
  const [amount, setAmount] = useState<Number>(0)
  const [filter, setFilter] = useState<String>("");
  const [bank, setBank] = useState<1|2|3|4|5|6>(1)
  const rates = useGetRates(bank)

  function Exchange (toCurrency: String) {
    if (!rates) return "Loading..."
    if (bank === 4 || bank === 5) return Number(amount * ((rates[currency].dev_prodej + rates[currency].dev_prodej) / 2) / ((rates[toCurrency].dev_prodej + rates[toCurrency].dev_prodej) / 2) / rates[currency].jednotka).toFixed(2)
    return Number((amount * rates[currency].dev_stred / rates[toCurrency].dev_stred / rates[currency].jednotka).toFixed(2))
  }

  

  return (
    <div className="flex flex-col items-center bg-gray-900 h-[100vh] text-gray-200 font-bold">
      <h1 className="text-3xl m-6 text-gray-200">Kurz</h1>
      <div className="flex flex-col justify-around items-center lg:flex-row">
        <Menu setState={setBank} options={DropdownOptions}/>
        <InputNumber value={amount} placeholder={"Amount"} setState={setAmount} />
        <Menu setState={setCurrency} options={rates ? Object.keys(rates) : ["CZK"]}/>
      </div>
      <h1 className="text-xl text-gray-200">Filter</h1>
      <Input value={filter} placeholder={"Česká koruna"} setState={setFilter} />
      <CurrencyContainer rates={rates} currency={currency} Exchange={Exchange} filter={filter}/>
    </div>

  )
}

export default App

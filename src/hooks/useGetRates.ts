import Axios from "axios";
import { useEffect, useState } from "react";

export default function useGetRates(bank) {
  const [currency, setCurrency] = useState<String>("CZK")
  const [rates, setRates] = useState(null);
  
  useEffect(() => {
    let today = new Date()
    setCurrency("CZK")
    Axios
    .get(`https://data.kurzy.cz/json/meny/b[${bank}}]den[${today.toISOString().slice(0,10).replace(/-/g, "")}].json`) //${} stands for making new date format to yyyymmdd as API requires
    .then((response) => { setRates({"CZK": {jednotka: 1, dev_stred: 1, dev_nakup: 1, dev_prodej: 1, nazev: "Česká koruna"}, ...response.data.kurzy}) })
    .catch((error) => { console.log(error) });
  }, [bank])

  return [rates, currency, setCurrency]
}
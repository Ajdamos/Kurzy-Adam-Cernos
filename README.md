# Kurzy Adam Černoš Zadání

# Použití
Vyberte banku podle které chcete mít kurz udán (každá banka může mít jiné hodnoty i měny)
Následně do Amount políčka napište množstí hodnoty
Následně vyberte měnu (napíšete třeba 900 a vyberete EUR, takže hledáte kurzy na 900 Euro)
Dole se vám vypíší Všechny možné měny které banka podporuje a jejich hodnota převedena z vámi určitého množství a hodnoty
Můžete použít pole filter na hledání specifické měny, podporuje jak název tak Kód měny

# Technologie 
React - Framework( ikdyž to neni framework)
TypeScript - Na typování dat
Tailwind - Stylizace
Axios - Fetch knihovna


# Problémy které jsem prošel cestou. 
formát API klíčů v objektech je v češtině, tudíž moje kombinace slov anglických jako třeba "rates" je v kombinaci v kódu se slovy "kurzy" popř "rates.kurzy" vypadá směšně.
Na výběr je 6 hlavních bank, vypsané jsou v Options.ts, tyto banky nabízí online portál kurzy.cz, záleží na jakou adresu se ptáme (taky datum). Existuje bank více například
číslo 7 je "ČSOB, divize IPB", což už jsem nebral jako podstatné. Většína z bank nabízeli 3 hodnoty. dev_nakup, dev_prodej, dev_stred. Z původních 6 bank "MONETA" a "Komerční Banka" neměli dev_stred (coz je prumer nakup prodej) a "Česká národní banka" nenabízela nakup a prodej, tudíž jsem musel u jednoho z případu dopočítat hodnotu z nechybějících údajů. Zároveň žádná banka nepřidává Českou korunu, což dává smysl je to zbytečný údaj. Přidal jsem si ji tudíž já s hodnoty 1 do pole, podle kterého následně zobrazím údaje.


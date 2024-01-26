# Měnové Kurzy Adam Černoš Zadání

# Dostupnost

Aplikace je dostupná na https://menove-kurzy-adam-cernos.vercel.app/ 

# Setup
Není to nutné, ta verze kterou si spustíte je ta stejná co je hostnutá online. <br />
1. Naclonujte si do počítače repozitář <br />
2. Do console vlozte "npm i" <br /> 
3. nasledne spustite "npm run dev" <br />

# Použití
Vyberte banku podle které chcete mít kurz udán (každá banka může mít jiné hodnoty i měny). <br />
Do amount políčka napište množstí hodnoty. <br />
Vyberte měnu (napíšete třeba 900 a vyberete EUR, takže hledáte kurzy na 900 Euro). <br />
Dole se vám vypíší všechny možné měny, které banka podporuje a jejich hodnota převedena z vámi určitého množství a měny. <br />
Můžete použít pole filter na hledání specifické měny, podporuje jak název tak kód měny. <br />

# Technologie 
React - Framework(i když to není framework)<br />
TypeScript - Typování dat<br />
Tailwind - Stylizace<br />
Axios - Fetch knihovna<br />


# Problémy které jsem prošel cestou. 
formát API klíčů v objektech je v češtině, tudíž moje kombinace slov anglických jako třeba "rates" je v kombinaci v kódu se slovy "kurzy" popř "rates.kurzy" vypadá směšně. <br />
Na výběr je 6 hlavních bank, vypsané jsou v Options.ts, tyto banky nabízí online portál kurzy.cz, záleží na jakou adresu se ptáme (taky datum). 
Existuje bank více například. číslo 7 je "ČSOB, divize IPB", což už jsem nebral jako podstatné. <br />
Většína z bank nabízeli 3 hodnoty. dev_nakup, dev_prodej, dev_stred. Z původních 6 bank "MONETA" a "Komerční Banka" neměli dev_stred = (nakup + prodej) / 2.<br />
"Česká národní banka" nenabízela nakup a prodej, tudíž jsem musel u jednoho z případu dopočítat hodnotu z nechybějících údajů. <br />
Zároveň žádná banka nepřidává Českou korunu, což dává smysl je to zbytečný údaj. Přidal jsem si ji tudíž já s hodnoty 1 do pole, podle kterého následně zobrazím údaje. <br />


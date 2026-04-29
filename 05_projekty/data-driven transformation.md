# Projekt: Data-Driven Transformation firmy o ~50 mln obrotu Leviatan-Poligrafia Sp. z o. o.

## Kontekst biznesowy

Firma działała w środowisku wysokiej zmienności popytu, wielu kanałów sprzedaży i złożonych decyzji zakupowo-magazynowych.  
Kluczowe wyzwania obejmowały:
- braki magazynowe na produktach rotujących
- zamrożony kapitał w nadmiernych zapasach
- ograniczoną przewidywalność sprzedaży
- brak segmentacji produktów pod decyzje logistyczne
- dużą liczbę decyzji podejmowanych intuicyjnie
- brak zaawansowanej analityki predykcyjnej

## Moja rola

Osoba odpowiedzialna za obszar technologii, danych i automatyzacji, z bezpośrednim wpływem na decyzje operacyjne i strategiczne.

Łączyłem:

- perspektywę zarządczą
- analitykę danych
- zrozumienie procesów firmy
- execution technologiczny

---

# Najważniejszy element projektu: wejście w domenę biznesową

Nie podszedłem do problemu jak „data scientist od modeli”, tylko najpierw bardzo mocno wszedłem w wiedzę domenową firmy.

Zrozumiałem m.in.:

- które produkty napędzają wynik
- jak wygląda rotacja i sezonowość
- gdzie firma traci pieniądze przez stockouty
- gdzie kapitał jest nieefektywnie zamrożony
- jak różnią się kanały sprzedaży
- które SKU są stabilne, a które nieregularne
- jak lead time wpływa na ryzyko

Dzięki temu analityka była osadzona w realiach biznesowych, a nie oderwana od praktyki.

---

# 1. Segmentacja produktów ABC/XYZ

Przeprowadziłem segmentację portfolio produktowego metodą ABC/XYZ.

## ABC:

Podział wg znaczenia biznesowego / udziału w obrocie / wpływu na wynik.

## XYZ:

Podział wg przewidywalności i zmienności popytu.

## Efekt:

Powstała matryca decyzyjna pozwalająca inaczej traktować np.:

- AX – produkty kluczowe i przewidywalne
- AZ – kluczowe, ale niestabilne
- CX – mało istotne, przewidywalne
- CZ – niski priorytet i wysoka losowość

To stało się fundamentem dalszego modelowania.

---

# 2. Zaawansowane prognozowanie popytu (realnie wykonane)

Zamiast jednego modelu dla całej firmy, prowadziłem szerokie eksperymenty na dziesiątkach modeli ML dla różnych segmentów produktowych.

## Zakres pracy

- setki iteracji eksperymentalnych
- porównania wielu podejść forecastingowych
- osobne podejścia dla różnych grup ABC/XYZ
- tuning modeli
- walidacja jakości predykcji
- analiza błędów

## Feature Engineering

Dodałem około 30 dodatkowych cech zwiększających jakość prognoz, m.in.:

- sezonowość
- tydzień / miesiąc (jako funkcja sinusa i cosinusa) 
- trendy sprzedażowe
- rolling averages
- dynamiki zmian
- opóźnienia czasowe (lags)
- status dostępności
- zmienne bazujące na wiedzy domenowej

## Efekt

Po dużej liczbie eksperymentów udało się stworzyć dobrze działające modele dla różnych grup produktów, zamiast jednego uśrednionego modelu.

To znacząco zwiększyło użyteczność prognoz biznesowo.

---

# 3. Prognozy operacyjne (realnie wykonane)

Dostarczałem prognozy sprzedaży wspierające decyzje zakupowe i magazynowe.

Cel:

- lepsze planowanie zamówień
- wcześniejsze wykrywanie ryzyk
- ograniczanie braków towaru
- lepsze zarządzanie kapitałem

---

# 4. Dashboard dla logistyki (realnie wykonane)

Stworzyłem dashboard wspierający kierownika logistyki.

Zakres:

- prognozy popytu
- analiza produktów
- wsparcie decyzji zakupowych
- monitoring ryzyk

---

# 5. System alertowy (realnie wykonane)

Uruchomiłem system wskazujący produkty wymagające uwagi na podstawie prognoz i stanów.

Cel:

- szybsza reakcja
- wcześniejsze zamówienia
- ograniczenie stockoutów

---

# 6. Inteligentne zatowarowanie (zaprojektowane)

Zaprojektowałem system automatycznej rekomendacji stanów magazynowych oparty o:

- forecast
- service level
- koszt utraty sprzedaży
- koszt magazynowania
- klasę produktu

---

# 7. Dynamic Pricing (zaprojektowane)

Przygotowałem koncepcję modelu dynamicznej ceny reagującej na:

- popyt
- zapas
- lead time dostaw
- ryzyko braku towaru

Cel:

- ochrona marży
- stabilizacja dostępności
- większa rentowność

---

# 8. Hurtownia danych i skalowanie (zaprojektowane)

Przygotowałem architekturę dalszego rozwoju:

- hurtownia danych
- pipeline’y automatyczne
- integracja ERP + marketplace + inne źródła
- przyszłe use case’y AI

---

# Współpraca z zarządem

Prowadziłem rozmowy i warsztaty dotyczące:

- zapasu
- cashflow zamrożonego w magazynie
- ryzyk operacyjnych
- kierunków rozwoju AI
- priorytetów inwestycyjnych

---

# Efekt biznesowy

- firma zaczęła podejmować decyzje bardziej data-driven
- powstały użyteczne prognozy sprzedaży
- zwiększono dojrzałość analityczną organizacji
- zarząd otrzymał lepsze narzędzia decyzyjne
- przygotowano fundament pod dalszą automatyzację

---

# Co ten projekt mówi o mnie

- potrafię wejść głęboko w domenę biznesową
- umiem łączyć wiedzę biznesową z ML
- robię eksperymenty jak operator, nie akademik
- buduję rozwiązania dające realną wartość
- rozumiem zarząd, operacje i technologię jednocześnie
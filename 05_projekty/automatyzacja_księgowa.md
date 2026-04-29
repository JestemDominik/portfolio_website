# Automatyczne łączenie danych sprzedażowych Allegro z dokumentami księgowymi z Optima - Asepta S.C.

## Problem
W firmie Asepta księgowa spędzała wiele godzin każdego miesiąca na ręcznym łączeniu transakcji z Allegro z dokumentami księgowymi z systemu Optima. Proces polegał na:

przeszukiwaniu dziennych raportów sprzedaży z Allegro,
dopasowywaniu ich do odpowiednich kontrahentów w systemie księgowym,
porównywaniu dat i kwot,
przypisywaniu numeru dokumentu księgowego do każdej transakcji.
Jest to proces monotonny, żmudny i podatny na błędy — a jednocześnie bardzo ważny dla prawidłowego rozliczenia podatkowego i zgodności dokumentacji.

## Rozwiązanie
Wspólnie z CTO opracowaliśmy pomysł na połączenie tych danych, który:

- Wczytuje raporty sprzedażowe z Allegro i eksport z systemu Optima (z ostatnich 6 miesięcy).
- Przetwarza dane: oczyszcza z duplikatów, normalizuje daty i kwoty (w tym przelicza formaty typu "48,99 zł") i redukuje formaty dat do dnia (ignorując godziny), analizuje podejrzane rekordy.
- Łączy dane na podstawie: dopasowania nazwiska klienta (z uwzględnieniem duplikatów), podobnej daty (z tolerancją ±1 dzień) i identycznej lub bardzo zbliżonej kwoty.
- Generuje nowy raport W którym każdej transakcji Allegro przypisywany jest numer paragonu z systemu księgowego (jeśli możliwy do odnalezienia).

## Efekt
Z 1175 transakcji udało się automatycznie przypisać dokument księgowy do 1745 przypadków.
W szczególności:
- wykryto transakcje bez dokumentów,
- zidentyfikowano i przefiltrowano duplikaty,
- wykryto transakcje z niepasującą datą lub kwotą,
- oznaczono 2 podejrzane przypadki (zostaną ręcznie zweryfikowane przez księgową).
Raport jest gotowy do pobrania, posortowany i oczyszczony z niepotrzebnych kolumn.

## Technologie
- Jupyter Notebook – szybkie prototypowanie i analiza danych.
- Pandas – przetwarzanie i łączenie danych.
- NumPy / datetime – logika dopasowywania dat i kwot.
- Streamlit (w planach) – ewentualne wdrożenie jako narzędzie biurowe.
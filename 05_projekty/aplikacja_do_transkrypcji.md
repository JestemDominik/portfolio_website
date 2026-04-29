# Problem - Asepta S.C.
W pracujac w firmie Asepta zauważyłem, że nasz zespół korzysta z zewnętrznej aplikacji do transkrypcji rozmów telefonicznych z klientami, za co co miesiąc płacimy 10 USD. Dodatkowo, po uzyskaniu transkrypcji, nasz szef ręcznie analizuje rozmowy, a następnie tworzy artykuły reklamowe do gazet na podstawie zebranych informacji. Cały ten proces był czasochłonny, powtarzalny i wymagał dużego nakładu pracy manualnej.

## Rozwiązanie
- Zbudowałem własną aplikację webową w Streamlit, która automatyzuje cały ten proces:
- Transkrypcja nagrania MP3 – z wykorzystaniem modelu Whisper (OpenAI) aplikacja przetwarza rozmowę z klientem na tekst.
- Klasyfikacja ról – dzięki ChatGPT-4o mini tekst jest automatycznie dzielony na wypowiedzi Doradcy i Klienta.
- Dopasowanie treści marketingowych – embeddingi rozmowy są porównywane z wcześniej zapisanymi artykułami konkurencji (przechowywanymi w formacie JSON i zapisanymi w bazie Qdrant). Aplikacja wybiera 2 najbardziej zbliżone tematycznie artykuły.
- Generowanie nowego artykułu – na podstawie rozmowy oraz treści konkurencyjnych artykułów, ChatGPT-4o tworzy spersonalizowany, atrakcyjny tekst reklamowo-informacyjny dodatko dodałem możliwość ręcznego zmiany "temperature" za pomocą suwaka.
- Eksport do .docx – gotowy artykuł oraz transkrypcja rozmowy zapisywane są w formacie Worda (.docx), gotowe do użycia przez dział marketingu.

## Efekty
Aplikacja znacząco skróciła czas potrzebny na tworzenie materiałów marketingowych, zredukowała koszty (brak miesięcznych opłat) i usprawniła wewnętrzny workflow. Projekt był również świetnym sposobem na rozwinięcie umiejętności w zakresie NLP, integracji API oraz budowy aplikacji end-to-end, od zauważenia problemu biznesowego, do przeszkolenia pracowników.
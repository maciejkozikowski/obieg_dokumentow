### INSTALACJA ###
Windows 10:
download: z https://www.python.org/downloads/release/python-373/
pip -V dla sprawdzenia wersji
aktualizacja: python -m pip install --upgrade pip

back: https://github.com/Michaye/ObiegDokumentow_back/tree/dzialajacyfront
front: https://github.com/maciejkozikowski/obieg_dokumentow/tree/Mateusz

! Robicie ng build na froncie
stworzy to folder dist/dokumenty-app
kopiujecie pliki
wklejacie do backu do src/static !

pip install django
pip install django-cors-headers
pip install djangorestframework
W src: python manage.py migrate
Jeœli jest b³¹d ze spacjami: https://stackoverflow.com/questions/5685406/inconsistent-use-of-tabs-and-spaces-in-indentation lub w tym pliku zmieñcie tabulacje na spacje czy coœ takiego.
python manage.py runserver
inny port: runserver localhost:8080 

-------------------------------------------------------------

Logowanie:
wys³anie - POST - http://localhost:8000/user/login
JSON - {email: "asd@asd.asd", password: "123"}

Rejestracja:
wys³anie - POST - http://localhost:8000/user/registration
JSON - {email: "asd@asd.asd", password: "123", passwordConfirmation: "123"}

Nadawanie uprawnieñ:
wys³anie - POST - http://localhost:8000/user/permissions //mogê zmieniæ na PUT jak trzeba.
JSON - {"id":1,"email":"asd","role":"ADMIN"} //wys³ana rola to zawsze ADMIN.

pobranie - GET - http://localhost:8000/user/all //jeœli back bêdzie udostêpnia³ pod np. /user/role/USER tylko zwyk³ych userów mogê zmieniæ na to.
JSON - { id: 1, email: "asd", role: "rola" }

Wysy³anie plików:
wys³anie - POST - http://localhost:8000/user/files
Chyba plik, ale nie wiem czy to dzia³a nawet, trzeba na backu przetestowaæ, bêdzie te¿ trzeba wys³aæ jakiœ komentarz (podpis?).

Potrzebne jeszcze:
Przegl¹danie dokumentów - nie wiem jak to ma wygl¹daæ, pobranie to mo¿e byæ GET - http://localhost:8000/user/files/{{userId}} 

Zatwierdzanie dokumentów - to co wy¿ej tylko http://localhost:8000/user/files/approval czyli poka¿e wszystkie niezatwierdzone pliki. Myœlê ¿e bêdzie jeszcze POST wysy³aj¹cy potwierdzenie i komentarz.
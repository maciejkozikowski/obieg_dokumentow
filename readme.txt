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
Je�li jest b��d ze spacjami: https://stackoverflow.com/questions/5685406/inconsistent-use-of-tabs-and-spaces-in-indentation lub w tym pliku zmie�cie tabulacje na spacje czy co� takiego.
python manage.py runserver
inny port: runserver localhost:8080 

-------------------------------------------------------------

Logowanie:
wys�anie - POST - http://localhost:8000/user/login
JSON - {email: "asd@asd.asd", password: "123"}

Rejestracja:
wys�anie - POST - http://localhost:8000/user/registration
JSON - {email: "asd@asd.asd", password: "123", passwordConfirmation: "123"}

Nadawanie uprawnie�:
wys�anie - POST - http://localhost:8000/user/permissions //mog� zmieni� na PUT jak trzeba.
JSON - {"id":1,"email":"asd","role":"ADMIN"} //wys�ana rola to zawsze ADMIN.

pobranie - GET - http://localhost:8000/user/all //je�li back b�dzie udost�pnia� pod np. /user/role/USER tylko zwyk�ych user�w mog� zmieni� na to.
JSON - { id: 1, email: "asd", role: "rola" }

Wysy�anie plik�w:
wys�anie - POST - http://localhost:8000/user/files
Chyba plik, ale nie wiem czy to dzia�a nawet, trzeba na backu przetestowa�, b�dzie te� trzeba wys�a� jaki� komentarz (podpis?).

Potrzebne jeszcze:
Przegl�danie dokument�w - nie wiem jak to ma wygl�da�, pobranie to mo�e by� GET - http://localhost:8000/user/files/{{userId}} 

Zatwierdzanie dokument�w - to co wy�ej tylko http://localhost:8000/user/files/approval czyli poka�e wszystkie niezatwierdzone pliki. My�l� �e b�dzie jeszcze POST wysy�aj�cy potwierdzenie i komentarz.
// Ustawienie odpowiedniego enkodowania przyjmowanych danych
process.stdin.setEncoding( 'utf-8' );

// Ustaw nasluchiwanie na zdarzenie odczytu
process.stdin.on( 'readable', function() {
    // metoda .read() ma za zadanie odczytac co uzytkownik podal na wejsciu (starcie)
    var input = process.stdin.read();
    // Jesli wartosc nie jest pusta, wyswietl zawartosc
    if( input !== null ) {
        // Dopisz do zmiennej odczyt wejscia wartosci nastepnie zamien na string i usun odstepy
        var instruction = input.toString().trim();
        // Jesli uzytkownik wpisal poprawna wartosc, wyswietl wynik
        switch( instruction ) {
            // Sprawdz czy wartosc jest rowna stringowi
            case '/exit':
                // Wyswietl komunikat zapisu
                process.stdout.write( 'Quitting app!\n' );
                // Zakoncz proces i zamknij aplikacje 
                process.exit();
                break;
            // Sprawdz czy wartosc jest rowna stringowi
            case 'lang':
                // Wyswietl jezyk Node.JS
                process.stdout.write( 'Node.JS language: ' + process.env.lang );
                // Zatrzymaj proces
                break;
            // Sprawdz czy wartosc jest rowna stringowi    
            case 'ver':
                // wyswietl wersje Node.JS
                process.stdout.write( 'Node.JS version: ' + process.versions.node );
                // Zatrzymaj proces
                break;
            // W przeciwnym razie gdy uzytkownik wpisal zla wartosc, wyswietl komunikat o bledzie
            default: process.stderr.write( 'Wrong instruction!\n' );    
        }          
    }
});
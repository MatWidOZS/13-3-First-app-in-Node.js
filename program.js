process.stdin.setEncoding('utf-8'); //ustawienie enkodowania na UTF-8 (domyślnie szesnastkowe)

process.stdin.on('readable', function() {
	var input = process.stdin.read(); //read - odczytanie, co użytkownik podał na wejściu
	if(input !== null) {
		process.stdout.write(input);		
	}
});
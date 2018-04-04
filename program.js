process.stdin.setEncoding('utf-8'); //ustawienie enkodowania na UTF-8 (domyślnie szesnastkowe)

console.log(process.env);

console.log('\n\nType "/exit" to quit app');

process.stdin.on('readable', function() {
	var input = process.stdin.read(); //read - odczytanie, co użytkownik podał na wejściu
	if (input !== null) {
		var instruction = input.toString().trim();
		if (instruction === '/exit') {
			process.stdout.write('Quitting app!\n');
			process.exit();
		} else {
			process.stderr.write('Wrong instruction!\n');
		}
	}
});
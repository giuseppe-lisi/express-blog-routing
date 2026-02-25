**MILESTONE 1**
Per iniziare, andiamo su Postman e prepariamo una nuova chiamata verso la nostra rotta store. 
- Impostiamo il verbo e l’endpoint corretti
- Selezioniamo il tab body e scegliamo il formato raw e JSON
- Inseriamo come corpo della nostra request un oggetto che rappresenti un nuovo post

*Nota: se vogliamo avere delle immagini, inventiamole pure.* 
*Nota: ricordiamo che non bisogna passare l’id quando si crea una nuova risorsa: sarà il server (con l’aiuto del database) a fornirlo.*

**MILESTONE 2**
Impostiamo il body-parser per far sì che la nostra app riesca a decifrare il request body.
Poi, all’interno della rotta Store, stampiamo nel terminale i dati in arrivo, grazie a un `console.log` 

**MILESTONE  3**
Implementiamo quindi la logica per aggiungere un nuovo post al nostro blog, e prepariamo la risposta adeguata.
Testiamolo con postman con due chiamate: store e poi index per verifica.

**MILESTONE 4**
Ripetiamo il procedimento per la rotta di Update, in modo da avere la possibilità di modificare le nostre risorse. 

**BONUS**
- Quelli del giorno prima, se non già fatti
- In Update, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.
- Provate a inventarvi qualche controllo di validazione. Ad esempio un errore se il titolo non ha almeno 3 caratteri o se una certa proprietà è assente.
- In Create provare a recuperare l'id più alto esistente, non l'ultimo
- Provate a modificare il controller per fare un unico export di oggettone (v. mia repo)
*Nota: i bonus sono appunto attività extra da svolgere se avete finito tutto e volete dilettarvi ulteriormente ⚠️ ce ne sono molti, in ordine di importanza (seconde me): voi partite da quelli che vi interessano di più*

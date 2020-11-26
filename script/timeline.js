//Gibt den grossen Container mit den Inhalten zu den einzelnen Generationen zurück
const allGenerationTextElements = document.getElementById('contgen');

// Funktion wird ausgelöst durch Klicken von Zeitstrahl-Containern
function redirect(ident){

    //Erstellt ein Array mit den einzelnen Generation-Contents und führt eine forEach-Schleife aus
    Array.from(allGenerationTextElements.children).forEach(text => {

        //Fügt allen Gen-Contents die Klasse "hide hinzu", damit der Content verschwindet
        text.classList.add('hide');

        //Falls die mitgegebene ID gleich der ID des Elements ist wird der Content angezeigt
        if(text = document.getElementById(ident)){
            text.classList.remove('hide');
        }
    });

    //Scrollt zur Position des Contents
    window.scrollTo({
        top: 1000,
        left: 1300,
        behavior: 'smooth'
    });
}
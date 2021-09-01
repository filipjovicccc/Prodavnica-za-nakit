(function onLoad() {
    setButtonFunction();
})();

function setButtonFunction() {
    document.getElementById("spec").onclick = getQuote;

}

async function getQuote() {

    await fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "quotes15.p.rapidapi.com",
            "x-rapidapi-key": "a36a0e7b43msh5761648ca542b15p15eb2ejsn66229f391d2e"
        }
    })
        .then(response => response.json())
        .then(response => {
            console.log(response);



            document.getElementById("quote").innerHTML = response.content;
            document.getElementById("author").innerHTML = "- " + response.originator.name + " -";


        })
        .catch(err => {
            console.error(err);
        });

}


















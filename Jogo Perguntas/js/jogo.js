var record = 0

var card = [
	document.getElementById("card-1"),
	document.getElementById("card-2"),
	document.getElementById("card-3"),
	document.getElementById("card-4"),
	document.getElementById("card-5"),
	document.getElementById("card-6"),
	document.getElementById("card-7"),
	document.getElementById("card-8"),
]

function iniciaJogo() {
	//Armazena os containers dos cards na váriavel indexada pelo id

	for (let i = 0; i < deck.length; i++) {

		card[i].innerHTML = //Pega os containers da variável card de acordo com o estágio do loop [i]; 
			`<div id="questTitle"> 
            <h3>${deck[i].titulo}</h3>     
        </div>
        <div id="questImg"> 
            <img src="${deck[i].imgSrc}" class="imgstylo" alt="image"><br>
        </div>
        <div id="questAlt"> 
            <strong><label for="${deck[i].id1}"><input type="radio" name="${deck[i].nameId}" id="${deck[i].id1}">${deck[i].alternativa1}</label></strong><br>
            <strong><label for="${deck[i].id2}"><input type="radio" name="${deck[i].nameId}" id="${deck[i].id2}">${deck[i].alternativa2}</label></strong><br>
            <strong><label for="${deck[i].id3}"><input type="radio" name="${deck[i].nameId}" id="${deck[i].id3}">${deck[i].alternativa3}</label></strong><br>
            
        </div>`



		//O Código HTML é exbidos em seus respectivos containers, junto com seus atributos definidos nos Objetos JSON, de acordo com o estágio do loop for [i];
		//Ao final, os conteudos dos cards são exibidos em um loop.
	}

}
var answer
function enviaResposta() {
     answer = [
        document.getElementById("q1alt3").checked,
        document.getElementById("q2alt2").checked,
        document.getElementById("q3alt1").checked,
        document.getElementById("q4alt1").checked,
        document.getElementById("q5alt1").checked,
        document.getElementById("q6alt2").checked,
        document.getElementById("q7alt3").checked,
        document.getElementById("q8alt1").checked,
        ]
        for (let j = 0; j < answer.length; j++) {
            if (answer[j]) {
                card[j].innerHTML = `<h1>VOCÊ ACERTOU!</h1>`

                record += deck[j].pontos
            }
            else {
                card[j].innerHTML = card.innerHTML = `<h1>VOCÊ ERROU!</h1>`

            }
        }
        
        var pontuacao = document.getElementById("pontuacao")
        
        pontuacao.innerHTML = `<h1>Sua Pontuação Total foi:</h1><h1>${record} pontos!</h1>`

}
iniciaJogo()


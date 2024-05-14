const chaveApi = "ce6f19d064f0b70f90d0ef2a536c2f51";

function atualizarPrevisao(servidor){
    document.querySelector(".cidade").innerHTML = "Tempo em " + servidor.name;
    document.querySelector(".temperatura").innerHTML = Math.floor(servidor.main.temp) + "°C";
    document.querySelector(".texto-previsao").innerHTML = servidor.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + servidor.main.humidity + "%";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${servidor.weather[0].icon}.png`;
}

async function buscarCidade(cidade){
    const servidor = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chaveApi}&lang=pt_br&units=metric`).then(resposta => resposta.json());

    atualizarPrevisao(servidor);
}

function cliqueBotao(){
    const cidade = document.querySelector(".pesquisar").value;
    
    buscarCidade(cidade);
}

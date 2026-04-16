async function buscarEstados() {
    const resposta = await fetch("https://localhost:5001/api/estados"); // URL da sua API
    const dados = await resposta.json();

    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    dados.forEach(estado => {
        const item = document.createElement("li");
        item.innerText = `${estado.nomeEstado} - Lula: ${estado.percentualLula}% | Bolsonaro: ${estado.percentualBolsonaro}%`;
        lista.appendChild(item);
    });
}
function buscarResultados() {
    fetch("https://localhost:5001/api/eleicoes")
        .then(response => response.json())
        .then(data => {
            let resultadoDiv = document.getElementById("resultado");

            resultadoDiv.innerHTML = "";

            data.forEach(item => {
                resultadoDiv.innerHTML += `
                    <p>
                        Estado: ${item.estado} <br>
                        Vencedor: ${item.vencedor}
                    </p>
                    <hr>
                `;
            });
        })
        .catch(error => {
            console.error("Erro:", error);
        });
}

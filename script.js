const API_URL = 'api/dados.php';

document.getElementById('btnAcessarBD').addEventListener('click', async function() {
    const dadosSection = document.getElementById('dadosSection');
    const tabelaBody = document.getElementById('tabelaBody');
    const btn = this;
    
    // Animação do botão
    btn.innerHTML = '🔄 CARREGANDO DADOS...';
    btn.style.opacity = '0.7';
    
    try {
        // Buscar dados da API
        const response = await fetch(API_URL);
        const result = await response.json();
        
        if (result.success && result.dados.length > 0) {
            // Mostrar a seção da tabela
            dadosSection.style.display = 'block';
            
            // Limpar tabela
            tabelaBody.innerHTML = '';
            
            // Preencher tabela
            result.dados.forEach(estado => {
                const row = tabelaBody.insertRow();
                row.innerHTML = `
                    <td>${estado.ID}</td>
                    <td><strong>${estado.NomeEstado}</strong></td>
                    <td>${formatarNumero(estado.Eleitorado)}</td>
                    <td>${formatarNumero(estado.Abstenção)}</td>
                    <td>${estado.PercentualAbstenção}%</td>
                    <td>${formatarNumero(estado.VotosLula)}</td>
                    <td class="lula">${estado.PercentualLula}%</td>
                    <td>${formatarNumero(estado.VotosBolsonaro)}</td>
                    <td class="bolsonaro">${estado.PercentualBolsonaro}%</td>
                    <td>${formatarNumero(estado.VotosBrancos)}</td>
                    <td>${formatarNumero(estado.VotosNulos)}</td>
                `;
            });
            
            // Exibir estatísticas
            exibirEstatisticas(result.dados);
            
            // Scroll suave até a tabela
            dadosSection.scrollIntoView({ behavior: 'smooth' });
            
            btn.innerHTML = '✅ DADOS CARREGADOS!';
            setTimeout(() => {
                btn.innerHTML = '📊 ACESSAR BANCO DE DADOS';
                btn.style.opacity = '1';
            }, 2000);
            
        } else {
            alert('Nenhum dado encontrado no banco de dados.');
            btn.innerHTML = '📊 ACESSAR BANCO DE DADOS';
            btn.style.opacity = '1';
        }
        
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao conectar com o banco de dados. Verifique se o servidor está rodando.');
        btn.innerHTML = '📊 ACESSAR BANCO DE DADOS';
        btn.style.opacity = '1';
    }
});

function formatarNumero(num) {
    if (!num) return '0';
    return num.toLocaleString('pt-BR');
}

function exibirEstatisticas(dados) {
    const estatisticasDiv = document.getElementById('estatisticas');
    
    let totalEleitorado = 0;
    let totalVotosLula = 0;
    let totalVotosBolso = 0;
    
    dados.forEach(estado => {
        totalEleitorado += estado.Eleitorado;
        totalVotosLula += estado.VotosLula;
        totalVotosBolso += estado.VotosBolsonaro;
    });
    
    const percLulaTotal = (totalVotosLula / totalEleitorado * 100).toFixed(2);
    const percBolsoTotal = (totalVotosBolso / totalEleitorado * 100).toFixed(2);
    
    estatisticasDiv.innerHTML = `
        <h3>📊 Estatísticas Gerais</h3>
        <div class="stats-grid">
            <div class="stat-card">
                <span class="stat-label">Total Eleitorado:</span>
                <span class="stat-value">${formatarNumero(totalEleitorado)}</span>
            </div>
            <div class="stat-card lula-card">
                <span class="stat-label">Total Votos Lula:</span>
                <span class="stat-value">${formatarNumero(totalVotosLula)} (${percLulaTotal}%)</span>
            </div>
            <div class="stat-card bolso-card">
                <span class="stat-label">Total Votos Bolsonaro:</span>
                <span class="stat-value">${formatarNumero(totalVotosBolso)} (${percBolsoTotal}%)</span>
            </div>
            <div class="stat-card">
                <span class="stat-label">Estados Analisados:</span>
                <span class="stat-value">${dados.length}</span>
            </div>
        </div>
    `;
}

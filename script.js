// Variáveis globais para armazenar dados carregados do JSON
let clubes = [];
let negociacoes = [];
let campeoes = [];
let historicoCampeoes = {};
let datasTemporada = [];
let janelaTransferencias = {};
let config = {};
let estatisticas = {};

// Dados de fallback (caso o carregamento do JSON falhe)
const dadosFallback = {
    clubes: [
        { nome: 'Real Madrid', abreviacao: 'RMA', cor: '#00529F' },
        { nome: 'Barcelona', abreviacao: 'BAR', cor: '#A50044' },
        { nome: 'Atlético Madrid', abreviacao: 'ATM', cor: '#CB3524' },
        { nome: 'Milan', abreviacao: 'MIL', cor: '#000000' },
        { nome: 'Internazionale', abreviacao: 'INT', cor: '#0068A8' },
        { nome: 'Chelsea', abreviacao: 'CHE', cor: '#034694' },
        { nome: 'Manchester City', abreviacao: 'MCI', cor: '#6CABDD' },
        { nome: 'Manchester United', abreviacao: 'MU', cor: '#DA291C' },
        { nome: 'Liverpool', abreviacao: 'LIV', cor: '#C8102E' },
        { nome: 'Arsenal', abreviacao: 'ARS', cor: '#EF0107' },
        { nome: 'Bayern Munchen', abreviacao: 'BAY', cor: '#DC052D' },
        { nome: 'PSG', abreviacao: 'PSG', cor: '#004170' }
    ],
    negociacoes: [
        {
            jogador: 'Vinicius Junior',
            clubeAtual: 'Real Madrid',
            clubeNovo: 'Manchester City',
            valor: 120000000,
            status: 'confirmada'
        },
        {
            jogador: 'Lionel Messi',
            clubeAtual: 'PSG',
            clubeNovo: 'Barcelona',
            valor: 0,
            status: 'confirmada'
        },
        {
            jogador: 'Harry Kane',
            clubeAtual: 'Tottenham',
            clubeNovo: 'Bayern Munchen',
            valor: 100000000,
            status: 'confirmada'
        },
        {
            jogador: 'Neymar Jr',
            clubeAtual: 'PSG',
            clubeNovo: 'Chelsea',
            valor: 80000000,
            status: 'em negociação'
        },
        {
            jogador: 'Kevin De Bruyne',
            clubeAtual: 'Manchester City',
            clubeNovo: 'Real Madrid',
            valor: 90000000,
            status: 'confirmada'
        },
        {
            jogador: 'Rafael Leão',
            clubeAtual: 'Milan',
            clubeNovo: 'Manchester United',
            valor: 85000000,
            status: 'confirmada'
        }
    ],
    campeoes: [
        {
            campeonato: 'SuperLiga',
            time: 'Real Madrid',
            treinador: 'Carlo Ancelotti'
        },
        {
            campeonato: 'Copa da SuperLiga',
            time: 'Barcelona',
            treinador: 'Xavi Hernández'
        },
        {
            campeonato: 'Champions League',
            time: 'Manchester City',
            treinador: 'Pep Guardiola'
        },
        {
            campeonato: 'Europa League',
            time: 'Atlético Madrid',
            treinador: 'Diego Simeone'
        }
    ],
    datasTemporada: [
        { data: '15/08/2024', descricao: 'Início da Temporada' },
        { data: '20/08/2024', descricao: 'Jogo: Real Madrid vs Barcelona' },
        { data: '27/08/2024', descricao: 'Jogo: Milan vs Internazionale' },
        { data: '03/09/2024', descricao: 'Jogo: Manchester City vs Liverpool' },
        { data: '10/09/2024', descricao: 'Início da Champions League' },
        { data: '17/09/2024', descricao: 'Jogo: Bayern vs PSG' },
        { data: '24/09/2024', descricao: 'Jogo: Chelsea vs Arsenal' },
        { data: '01/10/2024', descricao: 'Fase de Grupos - Rodada 2' },
        { data: '15/10/2024', descricao: 'Eliminatórias da Copa' },
        { data: '29/10/2024', descricao: 'Quartas de Final' },
        { data: '12/11/2024', descricao: 'Semifinais' },
        { data: '26/11/2024', descricao: 'Final da Copa' },
        { data: '10/12/2024', descricao: 'Final da Champions' },
        { data: '20/12/2024', descricao: 'Fim da Temporada' }
    ],
    janelaTransferencias: {
        inicio: '01/07/2024',
        fim: '31/08/2024'
    }
};



// Função para formatar valores em euros
function formatarValor(valor) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(valor);
}

// Função para obter informações de um clube
function obterClube(nomeClube) {
    return clubes.find(clube => clube.nome === nomeClube) || { 
        nome: nomeClube, 
        abreviacao: nomeClube.substring(0, 3).toUpperCase(), 
        cor: '#666666' 
    };
}

// Função para carregar as negociações
function carregarNegociacoes() {
    const container = document.getElementById('negociacoes-list');
    container.innerHTML = '';

    negociacoes.forEach(negociacao => {
        const clubeAtual = obterClube(negociacao.clubeAtual);
        const clubeNovo = obterClube(negociacao.clubeNovo);

        const card = document.createElement('div');
        card.className = 'negociacao-card';
        card.innerHTML = `
            <div class="negociacao-header">
                <div class="escudo" style="background-color: ${clubeAtual.cor}">
                    ${clubeAtual.abreviacao}
                </div>
                <div class="negociacao-info">
                    <div class="jogador-nome">${negociacao.jogador}</div>
                    <div class="negociacao-detalhes">
                        <span>${clubeAtual.nome}</span>
                        <span class="transfer-arrow">➝</span>
                        <span>${clubeNovo.nome}</span>
                    </div>
                </div>
                <div class="escudo" style="background-color: ${clubeNovo.cor}">
                    ${clubeNovo.abreviacao}
                </div>
            </div>
            <div class="negociacao-valor">
                <strong>Valor:</strong> ${formatarValor(negociacao.valor)}
            </div>
        `;

        container.appendChild(card);
    });
}

// Função para carregar os campeões
function carregarCampeoes() {
    const container = document.getElementById('campeoes-list');
    container.innerHTML = '';

    campeoes.forEach(campeao => {
        const clube = obterClube(campeao.time);

        const card = document.createElement('div');
        card.className = 'campeao-card';
        card.innerHTML = `
            <h3 class="campeonato-titulo">${campeao.campeonato}</h3>
            <div class="campeao-info">
                <div class="campeao-time">
                    <div class="escudo" style="background-color: ${clube.cor}; margin: 0 auto 0.5rem;">
                        ${clube.abreviacao}
                    </div>
                    ${campeao.time}
                </div>
                <div class="campeao-treinador">
                    Treinador: ${campeao.treinador}
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

// Função para carregar dados do arquivo JSON
async function carregarDadosJSON() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error('Erro ao carregar dados do JSON');
        }
        const dados = await response.json();
        
        // Atualizar variáveis globais com dados do JSON
        clubes = dados.clubes || dadosFallback.clubes;
        negociacoes = dados.negociacoes || dadosFallback.negociacoes;
        campeoes = dados.campeoes || dadosFallback.campeoes;
        config = dados.config || {};
        estatisticas = dados.estatisticas || {};
        
        // Processar datas do calendário
        if (dados.calendario && dados.calendario.datasTemporada) {
            datasTemporada = dados.calendario.datasTemporada.map(data => ({
                data: new Date(data.data).toLocaleDateString('pt-BR'),
                descricao: data.descricao
            }));
        } else {
            datasTemporada = dadosFallback.datasTemporada;
        }
        
        // Processar janela de transferências
        if (dados.calendario && dados.calendario.janelasTransferencias) {
            const janelaVerao = dados.calendario.janelasTransferencias.find(j => j.tipo === 'verão');
            if (janelaVerao) {
                janelaTransferencias = {
                    inicio: new Date(janelaVerao.inicio).toLocaleDateString('pt-BR'),
                    fim: new Date(janelaVerao.fim).toLocaleDateString('pt-BR')
                };
            }
        } else {
            janelaTransferencias = dadosFallback.janelaTransferencias;
        }
        
        // Processar histórico de campeões
        historicoCampeoes = dados.historicoCampeoes || {};
        
        console.log('Dados carregados do JSON com sucesso!');
        return true;
    } catch (error) {
        console.error('Erro ao carregar dados do JSON, usando dados de fallback:', error);
        
        // Usar dados de fallback
        clubes = dadosFallback.clubes;
        negociacoes = dadosFallback.negociacoes;
        campeoes = dadosFallback.campeoes;
        datasTemporada = dadosFallback.datasTemporada;
        janelaTransferencias = dadosFallback.janelaTransferencias;
        
        return false;
    }
}

// Função para calcular o valor total gasto considerando apenas negociações confirmadas
function calcularValorTotalGasto() {
    // Primeiro, tentar usar o valor do JSON se disponível
    if (config.valorTotalGasto) {
        return config.valorTotalGasto;
    }
    
    // Se não, calcular baseado nas negociações confirmadas
    const negociacoesConfirmadas = negociacoes.filter(neg => 
        neg.status === 'confirmada' || !neg.status // manter compatibilidade com versões antigas
    );
    
    return negociacoesConfirmadas.reduce((total, neg) => total + neg.valor, 0);
}

// Função para carregar o histórico de campeões
function carregarHistoricoCampeoes() {
    const container = document.getElementById('historico-campeoes-list');
    container.innerHTML = '';

    // Verificar se há dados históricos
    if (Object.keys(historicoCampeoes).length === 0) {
        container.innerHTML = `
            <div class="no-data">
                <i class="fas fa-info-circle"></i>
                <p>Nenhum dado histórico disponível</p>
            </div>
        `;
        return;
    }

    // Criar seção para cada competição
    Object.entries(historicoCampeoes).forEach(([competicao, campeoes]) => {
        const section = document.createElement('div');
        section.className = 'historico-section';
        section.innerHTML = `
            <h3 class="historico-titulo">
                <i class="fas fa-trophy"></i>
                ${competicao}
            </h3>
            <div class="historico-lista">
                ${campeoes.map(campeao => {
                    const clube = obterClube(campeao.time);
                    return `
                        <div class="historico-item">
                            <div class="historico-temporada">${campeao.temporada}</div>
                            <div class="historico-time">
                                <div class="escudo" style="background-color: ${clube.cor}">
                                    ${clube.abreviacao}
                                </div>
                                <span>${campeao.time}</span>
                            </div>
                            <div class="historico-treinador">${campeao.treinador}</div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
        container.appendChild(section);
    });
}

// Função para carregar o calendário
function carregarCalendario() {
    // Atualizar valor total gasto
    const totalGasto = calcularValorTotalGasto();
    document.getElementById('total-gasto').textContent = formatarValor(totalGasto);
    
    // Atualizar janela de transferências
    document.getElementById('janela-transferencias').textContent = 
        `${janelaTransferencias.inicio} - ${janelaTransferencias.fim}`;

    // Carregar datas da temporada
    const container = document.getElementById('datas-temporada');
    container.innerHTML = '';

    datasTemporada.forEach(data => {
        const item = document.createElement('div');
        item.className = 'data-item';
        item.innerHTML = `
            <span class="data-dia">${data.data}</span>
            <span class="data-descricao">${data.descricao}</span>
        `;
        container.appendChild(item);
    });
}

// Função para alternar entre as abas
function alternarAba(abaId) {
    // Remover classe active de todas as abas e botões
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Adicionar classe active à aba e botão selecionados
    document.getElementById(abaId).classList.add('active');
    document.querySelector(`[data-tab="${abaId}"]`).classList.add('active');

    // Carregar conteúdo específico da aba
    switch(abaId) {
        case 'negociacoes':
            carregarNegociacoes();
            break;
        case 'campeoes':
            carregarCampeoes();
            break;
        case 'historico-campeoes':
            carregarHistoricoCampeoes();
            break;
        case 'calendario':
            carregarCalendario();
            break;
    }
}

// Função para inicializar a aplicação
async function inicializarApp() {
    try {
        // Carregar dados do JSON primeiro
        await carregarDadosJSON();
        
        // Adicionar event listeners aos botões de navegação
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const abaId = e.target.dataset.tab;
                alternarAba(abaId);
            });
        });

        // Carregar a aba inicial
        alternarAba('negociacoes');

        // Adicionar funcionalidade de atualização de dados
        configurarAtualizacaoDados();

        console.log('Aplicação inicializada com sucesso!');
        console.log('Valor Total Gasto:', formatarValor(calcularValorTotalGasto()));
    } catch (error) {
        console.error('Erro ao inicializar aplicação:', error);
    }
}

// Função para simular atualização de dados (pode ser conectada a uma API no futuro)
function configurarAtualizacaoDados() {
    // Simular atualizações periódicas (a cada 30 segundos)
    setInterval(() => {
        console.log('Verificando atualizações...');
        // Aqui viria a lógica para buscar dados atualizados
    }, 30000);
}

// Função para adicionar uma nova negociação (para demonstração)
function adicionarNegociacao(jogador, clubeAtual, clubeNovo, valor) {
    negociacoes.unshift({
        jogador,
        clubeAtual,
        clubeNovo,
        valor: valor || 0
    });
    
    if (document.getElementById('negociacoes').classList.contains('active')) {
        carregarNegociacoes();
    }
    
    if (document.getElementById('calendario').classList.contains('active')) {
        carregarCalendario();
    }
}

// Exemplo de como adicionar uma negociação programaticamente
// adicionarNegociacao('Kylian Mbappé', 'PSG', 'Real Madrid', 180000000);

// Inicializar a aplicação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', inicializarApp);

// Exportar funções para uso global (para demonstração)
window.BrasfootSimulacao = {
    adicionarNegociacao,
    negociacoes,
    campeoes,
    datasTemporada
};

// Adicionar alguns dados de exemplo após o carregamento
setTimeout(() => {
    console.log('Brasfoot Simulação carregado com sucesso!');
    console.log('Dados carregados:', {
        negociacoes: negociacoes.length,
        campeoes: campeoes.length,
        datas: datasTemporada.length
    });
}, 1000);

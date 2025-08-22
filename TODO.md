# TODO - Correções do Valor Total Gasto

## Tarefas Pendentes

### 1. Investigar Discrepância nos Dados
- [ ] Analisar por que data.json mostra 485M mas as negociações somam 775M
- [ ] Verificar se apenas negociações "confirmadas" devem ser consideradas
- [ ] Calcular valor correto baseado no status das negociações

### 2. Modificar script.js para Carregar do data.json
- [ ] Implementar função fetch para carregar dados do JSON
- [ ] Atualizar todas as funções para usar dados do JSON
- [ ] Manter compatibilidade com dados hardcoded como fallback

### 3. Atualizar Cálculo do Valor Total
- [ ] Implementar lógica para filtrar por status (apenas "confirmada")
- [ ] Atualizar função carregarCalendario() para usar dados corretos
- [ ] Testar o cálculo com os dados reais

## Análise Inicial
- data.json tem 8 negociações totalizando 775.000.000 €
- Valor configurado: 485.000.000 € (possivelmente apenas confirmadas)
- script.js atual usa 6 negociações hardcoded: 475.000.000 €

## Status das Negociações no data.json:
1. confirmada (4): 120M + 0 + 100M + 90M + 85M = 395M? (precisa recontar)
2. em negociação (2): 80M + 120M = 200M
3. rumor (1): 180M

Precisa verificar a lógica exata de cálculo.

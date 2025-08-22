# 🎮 Brasfoot Simulação - Site de Gestão de Futebol

Um site completo e moderno para simulação de liga de futebol personalizada, inspirado no clássico Brasfoot. Desenvolvido com foco em design responsivo e experiência do usuário.

## ✨ Funcionalidades

### 🔄 Aba de Negociações
- Lista dinâmica de transferências entre os 12 clubes
- Visualização em formato: Jogador → Clube Atual → Clube Novo
- Ícones coloridos representando cada clube
- Valores das transferências em Euros
- Status das negociações (confirmada, em negociação, rumor)

### 🏆 Aba de Campeões
- Exibição dos campeões de 4 competições:
  - SuperLiga
  - Copa da SuperLiga  
  - Champions League
  - Europa League
- Informações do time campeão e treinador
- Design em cards com gradientes modernos

### 📅 Aba de Calendário
- Datas importantes da temporada
- Período das janelas de transferências
- Valor total gasto em transferências
- Destaque visual para jogos importantes e finais

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Design moderno com:
  - Flexbox e Grid Layout
  - Variáveis CSS
  - Animações e transições
  - Design responsivo (mobile-first)
  - Gradientes e efeitos visuais
- **JavaScript** - Funcionalidades dinâmicas
- **JSON** - Armazenamento de dados

## 🎨 Design e UX

- **Paleta de Cores**: Verde (futebol), azul (profissionalismo), acento laranja
- **Tipografia**: Montserrat para melhor legibilidade
- **Ícones**: Font Awesome para consistência visual
- **Responsividade**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações**: Efeitos suaves em hover e transições

## 📱 Clubes Participantes

1. Real Madrid
2. Barcelona  
3. Atlético Madrid
4. Milan
5. Internazionale
6. Chelsea
7. Manchester City
8. Manchester United
9. Liverpool
10. Arsenal
11. Bayern Munchen
12. PSG

## 🚀 Como Usar

1. **Clone ou baixe os arquivos**
2. **Abra o `index.html`** no navegador
3. **Navegue entre as abas** usando os botões no header
4. **Os dados são carregados automaticamente** do arquivo JSON

### Estrutura de Arquivos
```
brasfoot-simulacao/
├── index.html      # Página principal
├── styles.css      # Estilos completos
├── script.js       # Funcionalidades JavaScript
├── data.json       # Dados da liga (negociações, campeões, calendário)
└── README.md       # Este arquivo
```

## 🔧 Personalização

### Adicionar Novas Negociações
Edite o arquivo `data.json` na seção `negociacoes`:

```json
{
  "jogador": "Nome do Jogador",
  "clubeAtual": "Clube de Origem", 
  "clubeNovo": "Clube de Destino",
  "valor": 50000000,
  "status": "confirmada"
}
```

### Modificar Campeões
Atualize a seção `campeoes` no JSON:

```json
{
  "campeonato": "Nome do Campeonato",
  "time": "Time Campeão",
  "treinador": "Nome do Treinador"
}
```

### Alterar Datas do Calendário
Edite a seção `calendario.datasTemporada`:

```json
{
  "data": "2024-01-01",
  "descricao": "Descrição do Evento",
  "tipo": "tipo-do-evento"
}
```

## 🌐 Recursos Avançados

- **Design Responsivo**: Adapta-se a qualquer tamanho de tela
- **Performance Otimizada**: Carregamento rápido e suave
- **Acessibilidade**: Navegação por teclado e leitores de tela
- **Cross-browser**: Compatível com todos os navegadores modernos

## 📊 Dados de Exemplo

O projeto inclui dados de exemplo realistas:
- 8 transferências com valores de mercado
- 4 campeões de diferentes competições  
- 14 datas importantes da temporada
- Estatísticas financeiras da liga

## 🔮 Próximas Melhorias

- [ ] Sistema de login para múltiplos usuários
- [ ] API REST para gerenciamento de dados
- [ ] Gráficos e estatísticas avançadas
- [ ] Modo escuro/claro
- [ ] Exportação de relatórios em PDF
- [ ] Integração com banco de dados real

## 📞 Suporte

Para dúvidas ou sugestões, verifique a documentação ou entre em contato através dos canais oficiais.

---

**Desenvolvido com ❤️ para amantes de futebol e simulação esportiva**

*© 2024 Brasfoot Simulação - Todos os direitos reservados*

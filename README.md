# 💪 Treinos Pro - PWA de Treinos

Aplicativo Web Progressivo (PWA) completo para acompanhar seus treinos de musculação com histórico, estatísticas e muito mais!

## 🎯 Funcionalidades

### ✨ Design e Interface
- **Dark Mode Premium** com gradientes elegantes
- **Animações suaves** na navegação entre páginas
- **Ícones visuais** dos grupos musculares (Costas & Bíceps, Ombros)
- **Cards modernos** com sombras e efeitos hover
- **Layout 100% responsivo** para mobile e desktop

### 🏋️ Funcionalidades de Treino
- **Contadores de séries clicáveis** - Marque séries completadas com um clique
- **Timer automático de pausa** - Inicia automaticamente após completar uma série
- **Notificações visuais e sonoras** quando o timer termina
- **Checkbox de exercícios** - Marque exercícios como concluídos
- **Thumbnails automáticas** - Extraídas dos links do Fitbod.me
- **Visualização de vídeos** - Abra os vídeos de demonstração com um clique

### ✏️ Edição e Persistência
- **Edição inline** de:
  - Número de séries
  - Peso/Carga (kg)
  - Número de repetições
  - Tempo de pausa (segundos)
- **Salvamento automático** no localStorage
- **Histórico completo** de todas as modificações
- **Dados persistentes** mesmo após fechar o navegador

### 📊 Histórico e Estatísticas
- **Histórico completo** de todos os treinos realizados com:
  - Data e hora de cada treino
  - Duração total da sessão
  - Exercícios completados
  - Séries realizadas
  
- **Gráficos interativos** mostrando:
  - 📈 **Evolução de Carga** - Acompanhe o progresso de peso ao longo do tempo
  - 📅 **Frequência de Treinos** - Visualize sua consistência nos últimos 30 dias
  - ⏱️ **Tempo de Treino** - Compare a duração das suas sessões

## 📱 Instalação como PWA

### Android
1. Acesse https://asdinc-pcs.github.io/Treino2/
2. Toque no menu (⋮) do Chrome
3. Selecione "Adicionar à tela inicial"
4. Toque em "Adicionar"

### iOS (iPhone/iPad)
1. Acesse https://asdinc-pcs.github.io/Treino2/ no Safari
2. Toque no botão Compartilhar (□↑)
3. Role e toque em "Adicionar à Tela de Início"
4. Toque em "Adicionar"

### Desktop (Chrome/Edge)
1. Acesse https://asdinc-pcs.github.io/Treino2/
2. Clique no ícone de instalação (+) na barra de endereço
3. Clique em "Instalar"

## 🚀 Como Usar

### Iniciar um Treino
1. Na tela inicial, escolha entre:
   - **Seg/Qui — Costas & Bíceps**
   - **Sexta — Ombros**
2. Visualize todos os exercícios do treino
3. Clique nos números das séries para marcá-las como completadas
4. O timer iniciará automaticamente após cada série
5. Marque o checkbox quando completar todo o exercício
6. Clique em "Finalizar Treino" ao terminar

### Editar Informações
- Clique em qualquer valor (séries, repetições, peso, pausa)
- Digite o novo valor
- Pressione Enter ou clique fora para salvar
- As alterações são salvas automaticamente

### Visualizar Histórico
1. Clique na aba "Histórico"
2. Veja todos os treinos realizados com:
   - Data e hora
   - Duração
   - Exercícios completados

### Ver Estatísticas
1. Clique na aba "Estatísticas"
2. Analise seus gráficos de progresso:
   - Evolução de carga média
   - Frequência semanal
   - Duração das sessões

## 🔧 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com gradientes e animações
- **JavaScript (Vanilla)** - Lógica da aplicação
- **Chart.js** - Gráficos interativos
- **Font Awesome** - Ícones
- **Service Worker** - Funcionalidade offline
- **LocalStorage** - Persistência de dados

## 📂 Estrutura de Arquivos

```
Treino/
├── index.html          # Aplicação principal
├── manifest.json       # Configuração do PWA
├── sw.js              # Service Worker para cache offline
├── icon-192.png       # Ícone 192x192
├── icon-512.png       # Ícone 512x512
└── README.md          # Este arquivo
```

## 💾 Armazenamento Local

O aplicativo salva os seguintes dados no localStorage do navegador:

- `workout_costas` - Dados do treino de Costas & Bíceps
- `workout_ombro` - Dados do treino de Ombros
- `workout_history` - Histórico completo de treinos

**Nota:** Os dados permanecem salvos mesmo após fechar o navegador, mas serão perdidos se você limpar os dados do site.

## 🔄 Atualizar o Repositório GitHub

Para fazer upload manual das alterações:

1. Acesse https://github.com/asdinc-pcs/Treino2
2. Faça upload dos arquivos atualizados:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
3. Aguarde alguns minutos para o GitHub Pages atualizar
4. Acesse https://asdinc-pcs.github.io/Treino2/

## 🎨 Personalização

### Adicionar Novos Treinos
Edite o objeto `workoutsData` no arquivo `index.html`:

```javascript
const workoutsData = {
  seu_treino: {
    name: "Nome do Treino",
    icon: "fas fa-icon-name",
    color: "#hexcolor",
    exercises: [
      {
        name: "Nome do Exercício",
        series: 4,
        reps: "10",
        weight: 20,
        rest: 60,
        video: "https://fitbod.me/exercises/exercise-name"
      }
    ]
  }
};
```

### Alterar Cores do Tema
Modifique as variáveis de cor no CSS:

```css
/* Gradiente principal */
background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);

/* Cor de fundo */
background: linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 100%);
```

## 📱 Compatibilidade

- ✅ Chrome (Android/Desktop)
- ✅ Safari (iOS/macOS)
- ✅ Edge (Desktop)
- ✅ Firefox (Desktop)
- ✅ Samsung Internet

## 🐛 Solução de Problemas

### O PWA não está salvando dados
- Verifique se o navegador permite localStorage
- Não use modo anônimo/privado

### Os vídeos não carregam
- Verifique sua conexão com a internet
- Os vídeos do Fitbod requerem conexão ativa

### As estatísticas não aparecem
- Complete pelo menos um treino primeiro
- Verifique se o localStorage não está cheio

## 📄 Licença

Este projeto é de uso pessoal.

## 👨‍💻 Autor

Desenvolvido para uso pessoal de treinos.

---

**Bons treinos! 💪🔥**

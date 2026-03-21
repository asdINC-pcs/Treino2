# 📋 Instruções para Upload Manual no GitHub

## Arquivos para Upload

Você precisa fazer upload dos seguintes arquivos no repositório https://github.com/asdinc-pcs/Treino:

### ✅ Arquivos Principais (OBRIGATÓRIOS)
1. **index.html** - Aplicação completa com todas as funcionalidades
2. **manifest.json** - Configuração do PWA atualizada
3. **sw.js** - Service Worker com cache offline
4. **icon-192.png** - Ícone do PWA (192x192)
5. **icon-512.png** - Ícone do PWA (512x512)

### 📄 Arquivos Opcionais (Recomendados)
6. **README.md** - Documentação completa do projeto
7. **INSTRUCOES_UPLOAD.md** - Este arquivo de instruções

---

## 📤 Passo a Passo para Upload

### Opção 1: Upload via Interface Web do GitHub

1. **Acesse o repositório:**
   - Vá para https://github.com/asdinc-pcs/Treino

2. **Para cada arquivo:**
   - Clique no arquivo existente (ex: index.html)
   - Clique no ícone de lápis (✏️) "Edit this file"
   - Selecione todo o conteúdo (Ctrl+A)
   - Apague e cole o novo conteúdo do arquivo atualizado
   - Role até o final da página
   - Em "Commit changes", adicione uma mensagem descritiva:
     ```
     Atualização completa do PWA com novas funcionalidades
     
     - Design premium com dark mode e gradientes
     - Contadores de séries e timer automático
     - Histórico e estatísticas com gráficos
     - Edição inline de exercícios
     - Persistência de dados completa
     ```
   - Clique em "Commit changes"

3. **Para arquivos novos (icon-192.png, icon-512.png):**
   - Na página principal do repositório, clique em "Add file" > "Upload files"
   - Arraste os arquivos ou clique para selecioná-los
   - Adicione uma mensagem de commit
   - Clique em "Commit changes"

### Opção 2: Upload via Git (Linha de Comando)

Se você tem o Git instalado, pode fazer o upload assim:

```bash
# Clone o repositório (se ainda não tiver)
git clone https://github.com/asdinc-pcs/Treino.git
cd Treino

# Copie os novos arquivos para a pasta do repositório
# (substitua os caminhos pelos caminhos corretos dos arquivos gerados)

# Adicione todos os arquivos alterados
git add .

# Faça o commit
git commit -m "Atualização completa do PWA com novas funcionalidades"

# Envie para o GitHub
git push origin main
```

---

## ⏱️ Tempo de Atualização

Após fazer o upload:
- ✅ Os arquivos são atualizados **imediatamente** no GitHub
- ⏳ O GitHub Pages pode levar **1-5 minutos** para atualizar o site
- 🌐 Acesse https://asdinc-pcs.github.io/Treino/ para ver as mudanças

**Dica:** Se não ver as mudanças após 5 minutos:
- Limpe o cache do navegador (Ctrl+Shift+Del)
- Abra em modo anônimo/privado
- Tente forçar atualização (Ctrl+F5)

---

## 🔍 Verificação Pós-Upload

Após o upload, verifique se tudo está funcionando:

1. **Acesse o site:** https://asdinc-pcs.github.io/Treino/
2. **Teste as funcionalidades:**
   - ✅ Abra um treino
   - ✅ Clique em uma série (deve aparecer o timer)
   - ✅ Marque um exercício como completo
   - ✅ Edite um campo (clique no valor)
   - ✅ Finalize o treino
   - ✅ Veja o histórico
   - ✅ Verifique as estatísticas

3. **Instale como PWA:**
   - No Chrome/Edge: Clique no ícone de instalação (+) na barra de endereço
   - No iOS Safari: Compartilhar > Adicionar à Tela de Início
   - No Android Chrome: Menu > Adicionar à tela inicial

---

## 📦 Localização dos Arquivos Gerados

Todos os arquivos estão em: `/home/ubuntu/treino_pwa/`

```
/home/ubuntu/treino_pwa/
├── index.html                  ← UPLOAD OBRIGATÓRIO
├── manifest.json              ← UPLOAD OBRIGATÓRIO
├── sw.js                      ← UPLOAD OBRIGATÓRIO
├── icon-192.png               ← UPLOAD OBRIGATÓRIO
├── icon-512.png               ← UPLOAD OBRIGATÓRIO
├── icon.png                   ← Manter (compatibilidade)
├── README.md                  ← UPLOAD RECOMENDADO
└── INSTRUCOES_UPLOAD.md       ← Este arquivo
```

---

## ⚠️ Avisos Importantes

### Backup
- Antes de fazer upload, faça backup dos arquivos antigos
- Você pode baixá-los do GitHub antes de substituir

### Compatibilidade
- As alterações são **totalmente compatíveis** com a estrutura atual
- Não há necessidade de alterar configurações do GitHub Pages
- O PWA continuará funcionando offline após a instalação

### Cache do Service Worker
- Usuários que já instalaram o PWA precisarão:
  1. Fechar completamente o app
  2. Reabrir para baixar a nova versão
  3. Ou limpar o cache do navegador

---

## 🆘 Solução de Problemas

### "O site não atualizou"
- Aguarde 5 minutos
- Limpe o cache: Ctrl+Shift+Del > Últimas 24 horas > Limpar
- Tente em modo anônimo

### "Os ícones não aparecem"
- Verifique se os arquivos icon-192.png e icon-512.png foram enviados
- Confirme que os nomes estão corretos (minúsculas)

### "Service Worker não funciona"
- Verifique se o sw.js foi enviado corretamente
- O PWA só funciona em HTTPS (GitHub Pages já é HTTPS)
- Desinstale e reinstale o PWA

### "Erro 404 ao abrir o site"
- Verifique se o GitHub Pages está ativado
- Vá em Settings > Pages > Source: Deploy from a branch
- Branch: main (ou master) / Folder: / (root)

---

## 📧 Suporte

Se encontrar problemas:
1. Verifique o console do navegador (F12 > Console)
2. Verifique se todos os arquivos foram enviados corretamente
3. Confirme que não há erros de sintaxe nos arquivos

---

**Bom trabalho! 💪 Seu PWA de treinos está pronto para uso!**

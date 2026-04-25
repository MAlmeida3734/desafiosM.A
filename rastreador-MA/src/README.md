# 📦 Rastreador de Encomendas Simples

Um rastreador de encomendas leve e moderno, desenvolvido com HTML, CSS e JavaScript puro. O sistema valida o padrão de rastreio dos Correios e armazena o histórico de buscas localmente no navegador.

![rastreador-MA](Screenshot_20260425_032007.png)

## 🚀 Funcionalidades

- **Validação de Código:** Utiliza RegEx para garantir o formato oficial (2 letras, 9 números, 2 letras).
- **Histórico Local:** Salva automaticamente seus últimos rastreios usando `localStorage`.
- **Alertas Modernos:** Interface amigável utilizando a biblioteca SweetAlert2.
- **Interface Responsiva:** Design limpo com fundo SVG e suporte à tecla "Enter" para busca.
- **Gerenciamento de Histórico:** Opção para remover itens individuais ou limpar todo o histórico.

## 🛠️ Tecnologias Utilizadas

- [HTML5](https://mozilla.org)
- [CSS3](https://mozilla.org) (com Backgrounds SVG)
- [JavaScript (ES6+)](https://mozilla.org)
- [SweetAlert2](https://github.io) (Para pop-ups personalizados)

## 📂 Estrutura do Projeto

```text
├── index.html      # Estrutura principal
├── style.css       # Estilização e design
├── script.js       # Lógica do sistema e integração com localStorage
└── fundo.svg       # Elemento visual de fundo
```

## 🔧 Como usar

1. Clone ou baixe os arquivos do projeto.
2. Abra o arquivo `index.html` em qualquer navegador moderno.
3. Digite um código de rastreio válido (Ex: `AA123456789BR`).
4. Clique em "Buscar" ou pressione a tecla **Enter**.

## 📝 Licença

Este projeto é para fins de estudo e prática. Sinta-se à vontade para usar e melhorar!

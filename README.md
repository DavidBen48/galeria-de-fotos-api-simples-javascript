# **Desafio de Programação - 2025/1**
## Tema: Aplicação de Galeria de Fotos
## Tecnologias Usadas: HTML, CSS, JavaScript, e JSON
## Feito por: David Ben
> ### Copyright 2025 | garanto que todo o texto e código gerado foram feitos totalmente por mim sem uso de ChatGPT ou outras tecnologias artificiais.

---

> ## Enunciado
A aplicação de galeria de fotos tem como objetivo permitir que os usuários visualizem, filtrem e pesquisem imagens com base em palavras-chave. O sistema precisa exibir uma galeria de fotos de maneira organizada, com funcionalidades como filtragem por categoria, pesquisa por palavras-chave e exibição detalhada ao clicar nas imagens. O design deve ser intuitivo e responsivo, para garantir que a experiência seja fluída tanto em dispositivos móveis quanto desktops.

**Requisitos Funcionais**:
1. **Exibição de Galeria**: A galeria deve exibir uma série de fotos em um layout responsivo, com cada foto representada por uma miniatura.
   - As imagens devem ser carregadas de um arquivo JSON, que contém informações como nome da imagem, categoria, URL da imagem e palavras-chave associadas.
   
2. **Filtro por Categoria**: O usuário deve ser capaz de filtrar as fotos por categoria (ex: natureza, tecnologia, cidade, etc).
   
3. **Busca por Palavra-chave**: O sistema deve permitir que o usuário busque imagens por palavras-chave associadas a cada foto. A pesquisa deve ser realizada tanto no nome quanto nas palavras-chave da imagem.

4. **Exibição de Imagem Detalhada**: Quando o usuário clicar em uma miniatura da imagem, deve ser exibida a imagem em tamanho completo, acompanhada de seu nome, descrição e categoria.

5. **Responsividade**: O layout da galeria deve ser responsivo, ou seja, deve se ajustar bem tanto para telas grandes (desktop) quanto para dispositivos móveis.

- **Requisitos Extras (Opcional)**:
   - Implementar uma funcionalidade de **upload de fotos** para que os usuários possam adicionar novas imagens à galeria.
   - Salvar as fotos e informações (nome, descrição, categoria) em um arquivo JSON para persistência de dados.

> ## Resolução Do Projeto:

O código a seguir implementa uma aplicação de galeria de fotos simples utilizando HTML, CSS, JavaScript e JSON. Vou explicar as funcionalidades e o papel de cada elemento importante na aplicação.

#### 1. **Estrutura do Projeto**
O projeto é composto por três arquivos principais:
- `index.html`: Contém a estrutura HTML básica da página.
- `styles.css`: Contém o estilo e layout da galeria.
- `script.js`: Contém a lógica de funcionamento da galeria (como filtragem, busca e exibição detalhada).
- `data.json`: Contém os dados das imagens em formato JSON.

#### 2. **HTML: Estrutura da Página**
O arquivo `index.html` contém a estrutura básica da página, com um cabeçalho (header) que inclui um título e um formulário de pesquisa, seguido de uma área para exibição das imagens e seus detalhes.

- **Cabeçalho**: Contém o título da aplicação e um campo de pesquisa para permitir que o usuário busque imagens por palavras-chave.
  
- **Galeria**: A galeria é uma área onde as miniaturas das imagens serão exibidas. As imagens são carregadas dinamicamente do arquivo `data.json`.

#### 3. **CSS: Estilo e Responsividade**
O arquivo `styles.css` define o estilo da galeria, garantindo que ela seja visualmente agradável e responsiva.

- **Responsividade**: O layout da galeria é projetado para se ajustar automaticamente a diferentes tamanhos de tela, garantindo que a galeria funcione bem em dispositivos móveis, tablets e desktops.

#### 4. **JavaScript: Lógica de Funcionalidade**
O arquivo `script.js` contém a lógica da aplicação, incluindo as funções para carregar os dados do arquivo JSON, exibir as imagens na galeria e realizar a filtragem e a pesquisa.

- **Carregamento das Imagens**: Ao iniciar a página, o JavaScript carrega as imagens do arquivo `data.json` e exibe-as na galeria.

- **Filtro por Categoria**: A aplicação permite que o usuário filtre as imagens por categoria. Quando um filtro é aplicado, apenas as imagens que pertencem à categoria selecionada são exibidas.

- **Busca por Palavra-chave**: O sistema também permite que o usuário busque imagens por palavras-chave, e somente as imagens cujas palavras-chave correspondam à pesquisa serão exibidas.

- **Exibição Detalhada**: Ao clicar em uma miniatura, a imagem será exibida em tamanho completo, juntamente com seu nome, descrição e categoria.

#### 5. **Arquivo JSON: Persistência de Dados**
O arquivo `data.json` contém as informações das imagens, incluindo nome, categoria, descrição, URL da imagem e palavras-chave. (Um detalhe importante: o arquivo `data.json` não existe dentro do projeto, ele existe externamente dentro da página que fornece e API pública, ou seja, não poderá ser manipulado, editado, adicionado ou alterado dentro desse projeto. Ele passou por uma filtragem por mim mesmo, David, que escolheu as imagens padrões de automóveis como temática, para não ser algo aleatoriamente).

Exemplo de formato do `data.json`:
```json
[
  {
    "nome": "Cachoeira em Floresta",
    "categoria": "Natureza",
    "descricao": "Uma linda cachoeira no meio da floresta.",
    "url": "images/cachoeira.jpg",
    "palavras_chave": ["cachoeira", "natureza", "floresta"]
  },
  {
    "nome": "Computador Moderno",
    "categoria": "Tecnologia",
    "descricao": "Um computador moderno e elegante.",
    "url": "images/computador.jpg",
    "palavras_chave": ["computador", "tecnologia", "eletrônicos"]
  }
]
```

### **6. Funcionalidade de Busca e Filtro**

- **Busca por Palavra-chave**: O campo de pesquisa permite que o usuário digite palavras-chave para encontrar imagens específicas. O sistema pesquisa tanto no nome quanto nas palavras-chave associadas às imagens.
  
- **Filtro por Categoria**: A galeria possui um menu dropdown que permite ao usuário filtrar as imagens por categoria, como "Natureza", "Tecnologia", etc. Quando o filtro é aplicado, a galeria é atualizada automaticamente para exibir apenas as imagens da categoria selecionada.

---

> ### **Como rodar o projeto em sua máquina?**

#### 1. Rodando no Navegador:

Para rodar o projeto diretamente em seu navegador, basta seguir os seguintes passos:

1. **Baixe o repositório ou os arquivos do projeto**:
   - Baixe o arquivo ZIP ou clone o repositório GitHub com o comando:
     ```bash
     git clone https://github.com/DavidBen48/galeria-de-fotos.git
     ```

2. **Abra o projeto**:
   - Navegue até a pasta onde os arquivos foram baixados e abra o arquivo `index.html` em seu navegador de preferência.

3. **Interaja com a aplicação**:
   - Aplique filtros por categoria ou busque imagens por palavras-chave. Clique nas miniaturas para ver as imagens em tamanho completo.

---

### 2. Rodando no Visual Studio Code:

Se você preferir usar o Visual Studio Code (VSC), siga os passos abaixo:

1. **Clone o repositório do projeto**:
   Execute o comando no terminal para clonar o repositório:
   ```bash
   git clone https://github.com/DavidBen48/galeria-de-fotos.git
   ```

2. **Abra o Visual Studio Code**:
   Entre na pasta do projeto com:
   ```bash
   cd galeria-de-fotos
   code .
   ```

### 3. Link do **Deploy**:
Uma forma de visualizar externamente, sem precisar baixar ou clonar alguma coisa, apenas [clique aqui](https://davidben48.github.io/galeria-de-fotos-api-simples-javascript/) para visualizar. Ele abrirá uma nova aba do projeto para visualização.
---

E, com isso, a aplicação de galeria de fotos estará pronta para ser usada, oferecendo uma maneira eficiente de visualizar e pesquisar imagens de forma interativa e responsiva.

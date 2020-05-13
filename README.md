<h1 align="center">
LAUNCHSTORE
</h1>
    Site de compra e venda de produtos, 
    Caso de estudo do modulo do Launchbase da RocketSeat

## DESCRIÇÃO
    Projeto desenvolvido com as principais ferramentas e praticas de web development:
        • JavaScript
        • Node Js
    Conexão do Back-end com o banco de dados utilizando o Postgres e o Postbird para visualização das tabelas. 
    Utilizado também p DBDIAGRAM.IO para gerar as tabelas e suas afiliações em SQL.

## GETTING STARTED
    1. Clona este repositório usando o link `https://github.com/diegogmferreira/Launchbase.git`
    2. Criar um banco de dados chamado launchbasedb
    3. Instalar qualquer dependência necessária ao projeto pelo terminal: `npm install`
    4. Inicializar o servidor (neste caso foi utilizado o postgress)
        4.1 No terminal, rode o comando `pg_ctl -D /usr/local/var/postgres start`
    5. Gerar as tabelas e funções SQL utilizando o o código no database.sql no Postbird ou software similar.
    6. Utilizado a biblioteca para envio de email `NPM NODEMAILER` (Forgot Password), para instalar, rode o comando no terminal: `npm install nodemailer`
    7. Instalar o Express Session com conexão ao Postgres pelo terminal: `npm install express-session connect-pg-simple`
    8. Run "npm start" 



## CHECKLIST
-   [x] Layout
-   []  Image Upload 
    -   [x] Front-end image managment
    -   [x] Save
    -   []  Image Delete
    -   [x] Purchase
    -   [x] Image Gallery
-   [x] Product
    -   [x] Create
    -   [x] Edit
    -   [x] View
    -   [] Delete
-   [x] Product List
    -   [x] Home Page
    -   [x] Search
-   [x] User
    -   [x] Create Form
        -   [x] Mask & Validation
        -   [x] Alert Messages
        -   [x] Password Cryptograph
    -   [x] User Session Control
        -   [x] Express Session
        -   [x] Update User
        -   [x] Menu User
        -   [x] Login / Logout
        -   [x] Forgot / Recover Password
        -   [x] Delete User

-   [x] Colocar no repositório Github
-   [] Colocar o projeto online




## BUGS ENCONTRADOS

-   [] - Na pagina de editar, ao deletar uma imagem no "image-preview", a imagem não é deletada ao atualizar o produto, (erro no PhotoDiv / image.id)
-   [] - Ao editar produto, adicionando uma nova imagem, salvar, editar novamente para deletar, inseriu a mesma imagem novamente
-   [] - Na pagina de search, erro ao selecionar a categoria para especificar a buscar, incluindo produtos de outras categorias


## :memo: Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENCE](/LICENCE) para mais detalhes

- - - 

Feito por [Diego Ferreira](http://linkedin.com/in/diegogmferreira) (#6425)

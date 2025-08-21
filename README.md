# Mini Site - Perfis Bruna e Itamar

## Descrição
Este projeto é um mini site com múltiplas páginas interligadas que apresenta informações sobre dois perfis fictícios: Bruna e Itamar.  
O site inclui páginas de **perfil**, **portfólio** e **informações** para cada usuário, além de uma funcionalidade de **comentários** que utiliza `localStorage` para armazenar dados de forma persistente.

O objetivo do projeto é demonstrar o uso de **HTML**, **CSS** (com estilos personalizados), e **JavaScript com API DOM**, incluindo manipulação de elementos e CRUD em `localStorage`.

## Estrutura do Projeto
```
   /
   ├─ index.html
   ├─ perfilbruna.html
   ├─ portfoliobruna.html
   ├─ informacoesbruna.html
   ├─ perfilitamar.html
   ├─ portfolioitamar.html
   ├─ informacoesitamar.html
   ├─ style.css
   ├─ script.js
   └─ img/
   ├─ bruna.jpeg
   └─ itamar.jpeg
```


## Tecnologias Utilizadas
- **HTML5** - Estrutura das páginas
- **CSS3** - Estilização das páginas e responsividade
- **JavaScript** - Manipulação do DOM e funcionalidade de comentários
- **LocalStorage** - Armazenamento persistente de comentários por página

## Funcionalidades
1. **Menu de navegação** comum em todas as páginas.
2. **Rodapé** com links para GitHub e LinkedIn.
3. **Comentários dinâmicos**:
   - Adicionar comentário
   - Curtir comentário
   - Remover comentário
   - Armazenamento no `localStorage` por página
4. **CRUD** totalmente implementado com JavaScript e DOM.
5. **Imagens locais** para cada perfil.

## Como Executar
1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/mini-site.git

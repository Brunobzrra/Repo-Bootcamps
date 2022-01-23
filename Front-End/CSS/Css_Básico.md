# CSS3
## História
* Criado em 1996 como necessidade de formatar as páginas de uma melhor forma. 
# Como funciona?
* São criadas regras de estilo para elementos ou para um grupo de elementos
* Essas regras são definidas por meio dos seletores, que possuem a seguinte estrutura, como uma declaração:
~~~css
    a, #id{
        color: red; 
    }
~~~
* Para realizar a separação de partes específicas que precisam ser estilizadas separadamente, utiliza-se ID's (#) e Classes (.). Os ID's só podem ser adicionados uma vez.  

# BoxModel
* Representação de cada elemento HTML, de suas áreas em específico.
* 4 áreas: Margens (Entre outros elementos), Bordas (Fica entre o padding e conteúdo), Padding (Entre a borda e o conteúdo) e Conteúdos 
* Podemos atribuir valores diferentes para cada lado dessas áreas(cima, baixo, esquerda, direita), nessa ordem. 2 valores = x,y 4 valores = 4 lados. Para isso, também podemos utilizar as propiedades específicas. 
* Uma boa prática é escolhar um único sentido para o espaçamento entre elementos e aplicar isso a todos. 

# Border 
* A borda possui algumas outras propiedades de estilização, por exemplo: pontilhado (dotted), sólida (solid) e tracejada (dashed)
* A definição de sua estilização é feita pela ordem: largura, estilo e cor, ou com suas propiedades específicas. 
### Border Radius 
* Utilizado para arrendondar os cantos de um elemento

# Outras propiedades
* BackGround: Podemos estilizar de diversas formas, a mais comum é a mudança de cor. 

# Estilização de Textos
* Font-Family: Altera o estilo da fonte que é utilizada
* Web-Safe fonts: Fontes que são encontradas na maioria dos dispositivos
* Font-Size: Altera o tamanho do texto
* Font-Style: Altera a aparência do texto, ex: (normal, italic...)
* Font-weight: Altera o peso da fonte, ex: (bold, normal..)
* Text-Transform: É basicamente maiúsculo (lowercase) e minúsculo (uppercase)
* Text-decoration: Adiciona destaque aos textos (underline, overline, line-through)

# Estilização de listas
* Para alterar o marcador usamos o list-style-type
* Para utilizar imagens como marcador, utilizamos o list-style-image
* É possível alterar os marcadores de acordo com a função da lista:  
Caso seja uma lista ordenada, é possivel alterar o marcador (numeral, algarismo romano...)
Caso seja uma lista não ordenada, é possível alterar o estilo do marcador (triangulo, etc...)

# Dimensão e alinhamento
* Largura e Altura: Width e Height
* Max-width: utilizará toda a largura dispoínvel na tela no momento
* Margin: auto; - Vai permitir que as margens se alinhem automaticamente e que o conteúdo fique centralizado
* ~~~css
    body{
        margin: auto; 
    }
~~~
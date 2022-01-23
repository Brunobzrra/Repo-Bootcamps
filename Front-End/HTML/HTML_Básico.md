# A estrutura básica de um documento HTML é: 
~~~html
	<!DOCTYPE html> //Indica ao navegador qual é o tipo do documento
	<html> //Tag que inicia o documento HTML em questão
		<head> //Tag que representa o cabeçalho do HTML e pode conter algumas informações
			<meta> //Tag que representa a meta informações
			<title> Tag que representa o titulo na aba do navegador </title>
		</head> //Fecha o elemento HEAD
		<body> //Elemento que representa o corpo do HTML
		</body> //Fecha o elemento body
	</html> //Fecha o elemento HTML
~~~

Essa é a estrutura básica de um documento HTML

# Semântica HTML
* O elemento padrão eram as divs para organização (bagunça)
* A partir do HTML5, foi possivel organizar isso melhor:
	1. Section:
		Sessão Genérica
	2. Header:
		Cabeçalho da página 
	3. Article:
		Conteúdo relevante da página
	4. Aside:
		Barra lateral (conteúdo relacionado)
	5. Footer:
		Rodapé da página ou de itens da página
	6. h1 até o h6.
# Textos e Links
* Html foi criado a principio para textos e documentos
* Elementos "h" são essenciais para indicar partes do site. 
* Elemento "p" representa um paragrafo que pode ser utilizado para diversos tipos de conteúdos. Ele auxilia a organizar textos mais densos.
## Links
* O elemento "a" (remete a âncora) pode apontar para diversos tipos de links. 
* Os atributos que vão definir isso. No caso são o "href = "" " (hyperlinks) e o "target = "" " (como o html vai abrir isso. Ex: Nova guia). 
* Hyperlink útil: href="mailto:(email desejado)"
# Imagens
* Tag "img" é utilizada para isso, e não precisa ser fechada.
* Possuí 2 atributos: src (caminho da imagem) e alt (texto alternativo para imagem)
# Listas
* Coleções de itens que devem ser agrupados
* Tipos de listas:
1. Unordered List (UL) - A ordem não é importante
2. Ordered List (OL) - A ordem da lista é importante e pode ser organizada de diferentes formas. 
* Um item pode ser adicionado a ambas as listas com o elemento (li)
* É possível agrupar listas e mudar o seu estilo. 

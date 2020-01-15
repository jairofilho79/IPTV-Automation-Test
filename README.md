# IPTV-Automation-Test
Teste de automação para o repositório Catalogo-IPTV utilizando Puppeteer.

# Casos de uso

Foram criados 4 arquivos com os 4 casos de uso listados no repositório [Catalogo-IPTV](https://github.com/jairofilho79/Catalogo-IPTV).
O index.js é o 'caminho feliz' com a busca de uma obra que possui resultados, a escolha de uma obra e a visualização de mais detalhes.
O notFound.js é o teste de quando a obra pesquisada não possui resultados.
O back.js é para o caso do index.js + o usuário pedindo para voltar à tela dos seus resultados.
O newSearch.js é para o casos do index.js _ o usuário pedindo para fazer uma nova pesquisa.
Foi criado um script para executar os 4 arquivos através do npm start.
Será executado cada arquivo estes demorarão 3s além do tempo de execução para serem fechados.
Quando um arquivo for fechado, outro será iniciado logo em seguida.
Talvez existam problemas de responsividade, pois o Puppeteer tenta fixar o tamanho da tela e nem sempre isso é feito de forma inteligente (pode ser alterado no código).

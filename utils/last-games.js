/*dar control C nisso daqui e jogar no site oficial do globo esporte para obter os últimos jogos dos times */ 

function str(str) {
    let j1 = str[475-83*4]
    let j2 = str[475-83*3]
    let j3 = str[475-83*2]
    let j4 = str[475-83*1]
    let j5 = str[475]
    return [j1, j2, j3, j4, j5]
};

function last_games() {
    let ultimos_jogos = document.querySelectorAll('.classificacao__pontos--ultimos_jogos')
    let a = []
    ultimos_jogos.forEach((element) => {
        let data = element.outerHTML
        a.push(str(data))
    })
    return a
};

last_games();
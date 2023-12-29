let fs = require('fs')

let clubs = []

function AppendClub(place, name, advance_number, points, played, wins, draws, loss, gf, ga, gd, percentage /*last_games*/) {
    clubs.push({
        place, name, advance_number, points, played, wins, draws, loss, gf, ga, gd, percentage//, last_games
    })
}

function createOthers(...values) {

    let a = []
    for (let c=0;c <= 9*19; c+=9) {
        var start_range = c
        var stop_range = c+8
        for (var i = start_range; i <= stop_range; i++) {
            if (i==start_range) {
                var club = []
            }
            club.push(values[i])
            if (i+1 > stop_range) {
                a.push(club)
            }
        }
        //values[start_range:stop_range] preciso fazer algo com essa funcionalidade em forma de JavaScript
    }
    return a
}

/*function teste(points, played, wins, draws, loss, gf, ga, gd, percentage,) {
    console.log(points)
}*/


function createPna(...values) {
    let a = []
    for (let c=0;c <= 3*19; c+=3) {
        var start_range = c
        var stop_range = c+2
        for (var i = start_range; i <= stop_range; i++) {
            if (i == start_range) {
                var club = {}
                club.place = values[i]
            } else if(i == start_range+1) {
                club.name = values[i]
            } else {
            club.advance_number = values[i]
            }
            if (i+1 > stop_range) {
                a.push(club)
            }
        }
    }
    return a
}
let index = 0


let pna = createPna(
    1,	
    "Palmeiras",
    0,
    2,	
    "Grêmio",
    2,
    3,	
    "Atlético-MG",
    1,
    4,	
    "Flamengo",
    1,
    5,	
    "Botafogo",
    0,
    6,	
    "Bragantino",
    0,
    7,	
    "Fluminense",
    0,
    8,	
    "Athletico-PR",
    0,
    9,	
    "Internacional",
    0,
    10,	
    "Fortaleza",
    0,
    11,	
    "São Paulo",
    0,
    12,	
    "Cuiabá",
    0,
    13,	
    "Corinthians",
    0,
    14,	
    "Cruzeiro",
    0,
    15,	
    "Vasco",
    1,
    16,	
    "Bahia",
    1,
    17,	
    "Santos",
    2,
    18,	
    "Goiás",
    0,
    19,	
    "Coritiba",
    0,
    20,	
    "América-MG",
    0)

let others = createOthers(70, 38, 20,	10,	8,	64,	33,	31,	61,	
    68,	38,	21,	5,	12,	63,	56,	7,	59,	
    66,	38,	19,	9,	10,	52,	32,	20,	57,	
    66,	38,	19,	9,	10,	56,	42,	14,	57,	
    64,	38,	18,	10,	10,	58,	37,	21,	56,	
    62,	38,	17,	11,	10,	49,	35,	14,	54,	
    56,	38,	16,	8,	14,	51,	47,	4,	49,	
    56,	38,	14,	14,	10,	51,	43,	8,	49,	
    55,	38,	15,	10,	13,	46,	45,	1,	48,	
    54,	38,	15,	9,	14,	45,	44,	1,	47,	
    53,	38,	14,	11,	13,	40,	38,	2,	46,	
    51,	38,	14,	9,	15,	40,	39,	1,	44,	
    50,	38,	12,	14,	12,	47,	48,	-1,	43,	
    47,	38,	11,	14,	13,	35,	32,	3,	41,	
    45,	38,	12,	9,	17,	41,	51,	-10, 39,	
    44,	38,	12,	8,	18,	50,	53,	-3,	38,	
    43,	38,	11,	10,	17,	39,	64,	-25, 37,	
    38,	38,	9,	11,	18,	36,	53,	-17, 33,	
    30,	38,	8,	6,	24,	41,	73,	-32, 26,	
    24,	38,	5,	9,	24,	42,	81,	-39, 21	)


pna.forEach((obj) => {
    index = obj.place-1
    //console.log(...other[index])
    AppendClub(...Object.values(obj), ...others[index]) 
})

let url = __dirname.replace('\\utils', '')+'/test.json'
fs.writeFile(url, JSON.stringify(clubs), (err) => console.log(err || 'Arquivo salvo com sucesso!')) 
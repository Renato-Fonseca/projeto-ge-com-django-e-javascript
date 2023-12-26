$.ajax({
    url: 'clubs.json',
    method: 'get',
    success(data) {
        let lines = data.map((club) => {

            let place = document.createElement('td')
            place.innerHTML = club.place

            let name = document.createElement('td')
            name.innerHTML = club.name

            let points = document.createElement('td')
            points.innerHTML = club.points

            //let advance_number = document.createElement('td')
            //advance_number.innerHTML = club.advance_number

            let played = document.createElement('td')
            played.innerHTML = club.played

            let wins = document.createElement('td')
            wins.innerHTML = club.wins

            let draws = document.createElement('td')
            draws.innerHTML = club.draws

            let loss = document.createElement('td')
            loss.innerHTML = club.loss

            let gf = document.createElement('td')
            gf.innerHTML = club.gf

            let ga = document.createElement('td')
            ga.innerHTML = club.ga

            let gd = document.createElement('td')
            gd.innerHTML = club.gd

            let percentage = document.createElement('td')
            percentage.innerHTML = club.percentage
            
            let tr = document.createElement('tr')
            tr.appendChild(place)
            tr.appendChild(name)
            tr.appendChild(points)
            //tr.appendChild(advance_number)
            tr.appendChild(played)
            tr.appendChild(wins)
            tr.appendChild(draws)
            tr.appendChild(loss)
            tr.appendChild(gf)
            tr.appendChild(ga)
            tr.appendChild(gd)
            tr.appendChild(percentage)

            if (club.place == 1) {
                tr.classList.add('first-row')
            }
            return tr
        })
        let table = document.createElement('table')






        
        let tr_for_header = document.createElement('tr')
        tr_for_header.classList.add('table-header-row')

        let th_place = document.createElement('th')
        th_place.innerHTML = 'Classificação'

        let th_club = document.createElement('th')
        th_club.innerHTML = ''

        let th_points = document.createElement('th')
        th_points.innerHTML = 'P'

        let th_played = document.createElement('th')
        th_played.innerHTML = 'J'

        let th_wins = document.createElement('th')
        th_wins.innerHTML = 'V'

        let th_draws = document.createElement('th')
        th_draws.innerHTML = 'E'

        let th_loss = document.createElement('th')
        th_loss.innerHTML = 'D'

        let th_gf = document.createElement('th')
        th_gf.innerHTML = 'GP'

        let th_ga = document.createElement('th')
        th_ga.innerHTML = 'GC'

        let th_gd = document.createElement('th')
        th_gd.innerHTML = 'SG'

        let th_percentage = document.createElement('th')
        th_percentage.innerHTML = '%'


        tr_for_header.appendChild(th_place)
        tr_for_header.appendChild(th_club)
        tr_for_header.appendChild(th_points)
        tr_for_header.appendChild(th_played)
        tr_for_header.appendChild(th_wins)
        tr_for_header.appendChild(th_draws)
        tr_for_header.appendChild(th_loss)

        tr_for_header.appendChild(th_gf)
        tr_for_header.appendChild(th_ga)
        tr_for_header.appendChild(th_gd)
        tr_for_header.appendChild(th_percentage)




        lines = [
            tr_for_header,
            ...lines
        ]
        lines.forEach(line => table.appendChild(line))

        //document.body.insertAdjacentHTML('beforeend', table)
        let element = document.querySelector('.table')
        element.appendChild(table)
    }
})
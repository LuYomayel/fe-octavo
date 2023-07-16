export function getEndpointScorers(filter, filterMain) {
    if(filterMain === 'categoria'){
        if(
            filter.category === 'null' || 
            filter.division === 'null' || 
            filter.gender === 'null'
          ) return ''
          return `https://api-goleadores.handball-metropolitano.com/jugador/categoria/${filter.division}/${filter.category}/${filter.gender}`;
    }
    else if(filterMain === 'equipo'){
        if(
            filter.category === 'null' || 
            filter.division === 'null' || 
            filter.gender === 'null' ||
            filter.team === 'null' || filter.team === ''
          ) return ''
        return `https://api-goleadores.handball-metropolitano.com/jugador/equipo/${filter.team}/${filter.division}/${filter.category}/${filter.gender}`;
    }else {
        if(filter.player === '' || filter.player === null) return ''
        return `https://api-goleadores.handball-metropolitano.com/jugador/nombre/${filter.player}`;
    }
}
export function calculateGoals(scorers) {
    const players = scorers.map((scorer) => {
        const matches = Object.values(scorer.estadisticasXFecha).map((stat, index) => {
            return stat.goles;
        })
        const goals = matches.reduce((a, b) => a + b, 0);
        
        return {
            _id: scorer._id,
            name: `${scorer.nombre}`,
            goals: goals,
            team: scorer.equipo.nombre,
            totalMatches: matches.length,
            average: (goals / matches.length).toFixed(2)
        }
    });

    players.sort((a, b) => {
        if (a.goals > b.goals) return -1;
        if (a.goals < b.goals) return 1;
        return 0;
    })

    players.map((player, index) => {
        player.position = index + 1;
        return player;
    })

    return players;
}
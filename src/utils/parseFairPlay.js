export default function parseFairPlay(data) {
    const parsedData = data.map((item, index) => {
        return {
            id: index+1,
            teamName: item.equipo.nombre,
            yellowCards: item.amariilas,
            redCards: item.rojas,
            blueCards: item.azules,
            twoMin: item.dosmin,
            totalScore: item.fairPlay
        }
    })
    return parsedData;
}
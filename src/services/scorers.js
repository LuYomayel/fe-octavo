import { calculateGoals } from "../utils/totalGoals";

const API_URL = 'https://api-goleadores.handball-metropolitano.com/';

export async function getScorers(category, division, gender){
    const response = await fetch(`${API_URL}jugador/categoria/${division}/${category}/${gender}`);
    const data = await response.json();
    const scorers = calculateGoals(data.goleadores);
    return scorers;
}   

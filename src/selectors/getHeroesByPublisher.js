import { heroes } from "../data/heroes";

export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if (!validPublishers.includes( publisher )) {
        throw new Error(`Publisher "${ publisher }" no es valido`);
    }

    return heroes.filter(h => h.publisher === publisher);
}
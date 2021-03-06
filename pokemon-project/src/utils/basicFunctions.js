
export function getTypeColor(type) {
    switch (type) {
        case 'grass':
            return '#9bcc50';
        case 'poison':
            return '#b97fc9';
        case 'bug':
            return '#729f3f';
        case 'fire':
            return '#fd7d24';
        case 'water':
            return '#4592c4';
        case 'flying':
            return '#3dc7ef'
        case 'ground':
            return '#ab9842 '
        case 'normal':
            return '#3dc7ef'
        case 'electric':
            return '#eed535'
        case 'fairy':
            return '#fdb9e9'
        case 'fighting':
            return '#d56723'
        case 'psychic':
            return '#f366b9'
        case 'rock':
            return '#a38c21'
        case 'steel':
            return '#9eb7b8'
        case 'ghost':
            return '#7b62a3'
        case 'ice':
            return '#51c4e7'
        case 'dragon':
            return '#f16e57 '
        case 'dark':
            return '#707070'
        default:
            break;
    }
}

export function firstCharUpperCase(element) {
    const finalResult = element.charAt(0).toUpperCase() + element.slice(1);
    return finalResult
}

export function getFormatedOrder(number) {
    if (number <= 9999) {
        number = ("000" + number).slice(-3);
    }
    return `N.º${number}`;
}

export function getMainAbility(abilities) {
    if (abilities) {
        return firstCharUpperCase(abilities[0].ability?.name) || '';
    }
}

export function getWeightOrHeight(pokemon, type) {
    let finalResult = '';
    if (type === 'height') {
        finalResult = `${(pokemon.height / 10)} m`
    } else if ( type === 'weight') {
        finalResult = `${(pokemon.weight / 10)} kg`
    }
    return finalResult
}
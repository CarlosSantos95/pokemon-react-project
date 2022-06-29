
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
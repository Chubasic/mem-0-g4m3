export const boardInit = (boardSize: number) => {
    return shuffle([...Array(boardSize)]
        .map((_: any, index: number) => {
            return [...Array<number>(boardSize).fill(++index)];
        }).flat());

};

function shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return [...array];
}

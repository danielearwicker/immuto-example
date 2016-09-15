
export type NumberMap = { [id: number]: any };

export function getIds(books: NumberMap) {
    return Object.keys(books).map(s => parseInt(s, 10));
}

export function getNextId(books: NumberMap) {
    return getIds(books).reduce((l, r) => Math.max(l, r), 0) + 1;
}


// array = [unknown, uknown]
// index = number > array.length and is not < 0
// GARBAGE/BROKEN
export const arrayRemoveByIndexWorstThatWillNotWork = (array, index) => {
    if (array.length === 0 || index < 0 || index > array.length) {
        return array;
    };
    array.splice(index, 1);
    return array;
}

// DUMBASS (because we are adapting the garbage method and not commiting to one style of programing)
export const arrayRemoveByIndexWorst = (array, index) => {
    if (array.length === 0 || index < 0 || index > array.length) {
        return array;
    };

    let arrayCopied = [...array];
    arrayCopied.splice(index, 1);
    return arrayCopied;
}

// DECENT V1 (but we can just use a decent lib instead)
export const arrayRemoveByIndexDecentV1 = (array, indexToBeRemoved) => {
    if (array.length === 0 || indexToBeRemoved < 0 || indexToBeRemoved > array.length) {
        return array;
    };        

    return array.reduce(
        (sum, item, itemIndex) => {
            if (itemIndex !== indexToBeRemoved) {
                return sum.concat(item);
            }
            return sum;
        },
        [],
    );
}

export const arrayRemoveByIndexDecentV2 = (array, indexToBeRemoved) => {
    if (array.length === 0 || indexToBeRemoved < 0 || indexToBeRemoved > array.length) {
        return array;
    };

    return array.filter((item, itemIndex) => itemIndex !== indexToBeRemoved);
}
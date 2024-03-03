const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function negativesInArray(array, row) {

    return new Promise((resolve, reject) => {

        if (array.length > row) {

            const negatives = array[row].filter(n => n<0);
            if (negatives.length > 0 ) {

                resolve(array[row]);
            }
            else {

                reject("no negatives in this row");
            }
        }
        else {

            reject("Invalid row number");
        }
    })
}

rows = []

for(let x=0;x<array2D.length;x++) {

    rows.push(negativesInArray(array2D, x));
}

Promise.any(rows).then( (res) => console.log(res));
arrA = new Array(+prompt('Enter length of array', '10'));
arrB = [];
function sortNumbers(a, b) {
    return a - b;
}
metka:
for (i = 0; i < arrA.length; i++) {
    arrA[i] = Math.floor(Math.random() * 100);

    for (j = 2; j < arrA[i]; j++) {
        if (arrA[i] % j == 0) {
            continue metka;
        }
    }
    arrB[i] = arrA[i];
}
arrB = arrB.filter(Boolean);
arrA.sort(sortNumbers);
arrB.sort(sortNumbers);
document.write(`Array 1 = ` + arrA + `<br>`);
document.write(`Array 2 = ` + arrB + `<hr>`);

minVal = maxVal = arrB[0];

for (i = 0; i < arrB.length; i++) {
    if (arrB[i] < minVal) {
        minVal = arrB[i];
    } else if (arrB[i] > maxVal) {
        maxVal = arrB[i];
    }
}

document.write(`Minimum value of Array 2 is ` + minVal + `<br>`);
document.write(`Maximum value of Array 2 is ` + maxVal + `<br>`);
// Write your cade below:
function caclRemaindar(first, second) {
    var big;
    var small;

    if (first < second) {
        big = second;
        small = first;
    } else {
        big = first;
        small = second;
    }
    return big % small;
};

// function caclSum(array) {
//     let result = 0;

//     array.forEach(element => {
//         result += element;
//     });

//     return result;
// };

// function caclSumInConditon(array, arrayLength) {
//     let result = 0;
//     array.forEach(element => {
//         if (element < arrayLength) {
//             result += item;
//         }
//     });
//     return result;
// };

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}
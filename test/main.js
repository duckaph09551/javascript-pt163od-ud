/*
Hãy tìm các số tự nhiên bé hơn 10 và là số lẻ.
Hãy tìm các số tự nhiên bé hơn 20 và là số chẵn.
Hãy tìm các số tự nhiên bé hơn 30 và là số nếu chia 3 thì dư 2.
*/

// const findNumber = (num, func) => {
//     const result = [];
//     for (let i = 0; i < num; i++) {
//         if (func(i)) {
//             result.push(i);
//         }
//     }
//     return result;
// };

// findNumber(10, (number) => number % 2 === 1);
// findNumber(20, (number) => number % 2 === 0);
// findNumber(30, (number) => number % 3 === 2);

const findNumber = (num) => (func) => {
    const result = [];
    for (let i = 0; i < num; i++) {
        if (func(i)) {
            result.push(i);
        }
    }
};
findNumber(10)((number) => number % 2 === 1);
findNumber(20)((number) => number % 2 === 0);
findNumber(30)((number) => number % 3 === 2);
/*
 Accounting

 Write an expression using higher-order
 array methods (say, filter and reduce)
 to compute the total value of the machines
 in the inventory array.
 */
const inventory = [
    {type:   "machine", value: 5000},
    {type:   "machine", value:  650},
    {type:      "duck", value:   10},
    {type: "furniture", value: 1200},
    {type:   "machine", value:   78}
];

let totalMachineValue = (arr) => {
    let answ = 0;
    for (let elem of arr){
        if(elem.type === "machine"){
            answ += elem.value;
        }
    }
    return answ;
};

console.log(totalMachineValue(inventory));


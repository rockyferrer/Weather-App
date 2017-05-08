// var names = ['Rocky', 'David', 'James'];

// names.forEach(function(name) {
//     console.log('forEach', name);
// });
//
// names.forEach((name) => {
//     console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Rocky'));

// var person = {
//     name: 'Andrew',
//     greet: function() {
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name);
//         });
//     }
// };
//
// person.greet();

// Challenge Area

function add(a, b) {
    return a + b;
}

var addStatement = (a, b) => {
    return a + b;
}
console.log('addStatement', addStatement(4, 5));

var addExpression = (a, b) => a + b;
console.log('addExpression', addExpression(1, 1));

console.log('add', add(1, 3));
console.log('add', add(9, 0));

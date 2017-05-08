// function getTempCallback(location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }
//
// getTempCallback('Mississauga', function(err, temp) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp);
//     }
// });
//
// function getTempPromise(location) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve(79);
//             reject('City not found');
//         }, 1000);
//     });
// }
//
// getTempPromise('Mississauga').then(function(temp) {
//     console.log('promise success', temp);
// }, function(err) {
//     console.log('promise error', err);
// });

// challenge area

function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('These are both not numbers');
        }
    });
}

addPromise(1, 2).then(function(sum) {
    console.log('promise success, sum is ', sum);
}, function(err) {
    console.log('promise error, ', err);
});

addPromise(1, 'er').then(function(sum) {
    console.log('promise success, sum is ', sum);
}, function(err) {
    console.log('promise error, ', err);
});

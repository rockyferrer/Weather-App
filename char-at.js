function replaceComparison(url) {
    var result = '';
    for (let i = 0; i < url.length; i++) {
        if (url.charAt(i) !== ">" || url.charAt(i) !== "<") {
            result += url[i]
        }
    }
    return result;
}

console.log('test');
console.log('result', replaceComparison('test'));
console.log('<<<');
console.log('result', replaceComparison('<<<'));

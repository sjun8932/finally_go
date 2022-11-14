function makeCounter(predicate) {

    let counter = 0;

    return function () {

        counter = predicate(counter);
        return counter;
    };
}

function increase() {
    return ++n;
}

function decrease() {
    return --n;
}

const increaser = makeCounter(increase); //①
console.log(increaser())
console.log(increaser())

const decreaser = makeCounter(decrease); //②
console.log(decreaser());
console.log(decreaser());
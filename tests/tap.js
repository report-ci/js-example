var test = require('tape');

test('timing test', function (t) {
    t.plan(2);

    t.equal(typeof Date.now, 'function');
    var start = Date.now();

    t.equal(0, 1);
    t.equal(0, 2);

    setTimeout(function () {
        t.equal(Date.now() - start, 100);
    }, 100);
});


test('fail test', (t) => {
    t.equal(3,2);
});
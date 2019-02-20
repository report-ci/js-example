var test = require('tape');

test('timing test', function (t) {

    t.equal(typeof Date.now, 'function');
    var start = Date.now();

    t.equal(1, 1);
    t.equal(2, 2);
    t.end();

});


test('fail test', (t) => {
    t.equal(3,3);
    t.end();
});
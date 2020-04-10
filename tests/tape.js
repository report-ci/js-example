var test = require('tape');

test('timing test', function (t) {

    t.equal(typeof Date.now, 'function');
    var start = Date.now();

    t.equal(1, 4);
    t.equal(2, 4);
    t.end();

});


test('fail test', (t) => {
    t.equal(2,3);
    t.end();
});
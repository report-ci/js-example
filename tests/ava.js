import test from 'ava';

test('foo will run', t => {
    t.pass();
});

test('foo will also run, yet fail', t => {
    t.pass("Does that need message?");
});

test('foo will run but not exclusively', t => {
    t.pass("Babumm");
});

// Won't run, no title
test('some name', function (t) {
    t.pass();
});

// Won't run, no explicit title
test('title', function foo(t) {
    t.pass();
});
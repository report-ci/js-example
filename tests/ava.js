import test from 'ava';

test('foo will run', t => {
    t.pass();
});

test('foo will also run, yet fail', t => {
    //t.fail("Does that need message?");
});

test('foo will run but not exclusively', t => {
    //t.fail("Babumm");
});

// Won't run, no title
test('some name', function (t) {
    t.fail();
});

// Won't run, no explicit title
test(function foo(t) {
    t.fail();
});
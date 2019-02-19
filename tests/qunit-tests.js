//require('../qunit-logger-json.js')

//QUnit.jUnitDone((report) => {console.log("Rep: " + JSON.stringify(report.json()));})

//QUnit.log((lg) => console.log(JSON.stringify(lg)));

QUnit.test( "hello test", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
    assert.ok( 1 == "1", "Passed!" );
    assert.ok( 1 == "1", "Passed!" );
});


QUnit.test( "bye test", function( assert ) {
    assert.ok( 1 === "1", "Not passed!" );
    assert.ok( 1 === "1", "Not passed!" );
    assert.ok( 1 === "1", "Not passed!" );
});

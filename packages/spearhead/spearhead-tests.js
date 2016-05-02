// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by spearhead.js.
import { name as packageName } from "meteor/spearhead";

// Write your tests here!
// Here is an example.
Tinytest.add('spearhead - example', function (test) {
  test.equal(packageName, "spearhead");
});

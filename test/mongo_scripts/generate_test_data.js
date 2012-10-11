
/**
 *  Generates Data for ExpressJS-Blog to be Tested 
 *
 *  Usage: To Be Determined
 */

// ENV
db = db.getSisterDB('ExpressJS-Blog_Test1775b07a285330b1aef727ea8dc695e7');

// Random arrays and variables
var titles            = [ 'First', 'Second', 'Third', 'Fourth'
                        , 'Fifth', 'Sixth', 'Seventh', 'Eight'
                        , 'Ninth', 'Tenth'];
var random_tags       = [ 'Alpha', 'Beta', 'Gamma', 'Delta'
                        , 'Epsilon', 'Mu', 'Pi', 'Phi'
                        , 'Rho', 'Kappa'];
var random_categories = [ 'one', 'two', 'three', 'four'
                        , 'five', 'six', 'seven', 'eight'
                        , 'nine', 'ten'];
var random_text       = [ 'Lorem ipsum dolor sit amet'
                        , 'Consectetur adipiscing elit'
                        , 'Etiam quis pretium urna']

// 1. Insert Author Data
db.blogauthors.ensureIndex( {username : 1}, {unique : true} );
db.blogauthors.save(
  { 'username'   : 'kernelpanic'
  , 'fullname'   : 'Frank Doe'
  , 'is_active'  : true
  }
);
db.blogauthors.save(
  { 'username'   : 'johndoe'
  , 'fullname'   : 'John Doe'
  , 'is_active'  : true
  }
);

// 2. Get its ID
var authors = [];
authors.push(db.blogauthors.findOne({username : 'kernelpanic'}));
authors.push(db.blogauthors.findOne({username : 'johndoe'}));

// 3. Insert Posts
  db.blogposts.save(
    { 'title'         : titles[0] + ' Post'
    , 'body'          : GetRandomText()
    , 'author'        : authors[0]
    , 'tags'          : GetThreeRandomArray(random_tags)
    , 'categories'    : GetThreeRandomArray(random_categories)
    , 'is_active'     : true
    , 'date_created'  : Date.now()
    }
  );

for (var i = 1; i < 10; i++) {
  db.blogposts.save(
    { 'title'         : titles[i] + ' Post'
    , 'body'          : GetRandomText()
    , 'author'        : authors[1]
    , 'tags'          : GetThreeRandomArray(random_tags)
    , 'categories'    : GetThreeRandomArray(random_categories)
    , 'is_active'     : true
    , 'date_created'  : Date.now()
    }
  );
};

function GetThreeRandomArray (generator) {
  var response = [];
  for (var j = 0; j < 3; j++) {
    var tag = generator[Math.floor(10 * Math.random())];
    response.push(tag);
  }
  return response;
};

function GetRandomText () {
  var response = '';
  response += random_text[Math.floor(3 * Math.random())] + ', '
           +  random_text[Math.floor(3 * Math.random())] + ', '
           +  random_text[Math.floor(3 * Math.random())] + '.'
  return response;
}
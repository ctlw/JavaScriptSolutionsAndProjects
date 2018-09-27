
//notes:
//solved as part of freecodecamp.org curriculum for javascript algorithms and data structures, basic javascript
//problem title: record collection

// Setup
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [ 
      "Let It Rock", 
      "You Give Love a Bad Name" 
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [ 
      "1999", 
      "Little Red Corvette" 
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
if(value!=""){
  if(prop=="tracks"){
    if(collection[id].hasOwnProperty("tracks")){
      //add value to end of tracks array 
      collection[id][prop].push(value);
    }
    else{
      //create empty array
      collection[id].tracks = [];
      //assign value to array
      collection[id].tracks.push(value);
    }
  }
  else{
    //update or set the value for that record album's property
    collection[id][prop]=value;
  }

}else{
  //value is empty so delete prop property from album
  delete collection[id][prop];
}


//code that didn't work:
// if(prop!="tracks" && value!=""){
//   collection[id][prop] = value;
// }else if(prop=="tracks" && !collection[id].hasOwnProperty("tracks")){
//   collection[id].album.tracks = [];
//   collection[id].album.tracks.push(value);
// }else if(prop=="tracks" && value!="") {
//   collection[id].tracks.push(value);
// }else if(value==""){
//   delete collection[id].prop;
// }

return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
'use strict';

function collectSameElements(collectionA, objectB) {
  var r = new Array();
  // for (var i=0;i<collectionA.length;i++) {
  //   for (var item in objectB) {
  //     if (collectionA[i] == item) {
  //       r.push(collectionA[i]);
  //       break;
  //     }
  //   }
  // }
  var collectionB=objectB.value;
  for (var i = 0; i < collectionA.length; i++) {
    for (var j = 0; j < collectionB.length; j++) {
      if (collectionA[i] == collectionB[j]) {
        r.push(collectionB[j]);
        break;
      }
    }
  }
  return r;
}

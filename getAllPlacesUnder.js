let croatia = {
  id: 1,
  name: "Croatia",
  parentId: 0, //o je root elelement
};

let istria = {
  id: 2,
  name: "Istria",
  parentId: 1,
};

let pula = {
  id: 3,
  name: "Pula",
  parentId: 2, //o je root elelement
};

let veruda = {
  id: 6,
  name: "Veruda",
  parentId: 3, //o je root elelement
};

let rovinj = {
  id: 4,
  name: "Rovinj",
  parentId: 2, //o je root elelement
};

let dalmacija = {
  id: 5,
  name: "Dalmacija",
  parentId: 1, //o je root elelement
};

let places = [croatia, istria, pula, rovinj, dalmacija, veruda];

/*let places = () => {
  return [
    this.croatia,
    this.istria,
    this.pula,
    this.rovinj,
    this.dalmacija,
    this.veruda,
  ]
} */

function getAllPlacesUnder(placeId) {
  let result = places.filter((place) => {
      return place.parentId == placeId;
  });
    result.forEach((element) => {
      result = result.concat(getAllPlacesUnder(element.id))
    })
    return result;
  }


module.exports = getAllPlacesUnder;

//console.log(getAllPlacesUnder(3));




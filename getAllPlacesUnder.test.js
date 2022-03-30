const getAllPlacesUnder = require('./getAllPlacesUnder');

let croatia = {
    id: 1,
    name: "Croatia",
    parentId: 0, 
  };
  
  let istria = {
    id: 2,
    name: "Istria",
    parentId: 1,
  };
  
  let pula = {
    id: 3,
    name: "Pula",
    parentId: 2, 
  };
  
  let rovinj = {
    id: 4,
    name: "Rovinj",
    parentId: 2, 
  };
  
  let dalmacija = {
    id: 5,
    name: "Dalmacija",
    parentId: 1, 
  };

  let veruda = {
    id: 6,
    name: "Veruda",
    parentId: 3, 
  };

  
  let places = [croatia, istria, pula, rovinj, dalmacija, veruda];

describe('getAllPlacesUnder', () => {
    test('Ako je place = Pula vrati Veruda', () => {
        expect(getAllPlacesUnder(3)).toStrictEqual([veruda]);
    });
    test('Ako je place = istria vrati pula,rovinj,veruda', () => {
        expect(getAllPlacesUnder(2)).toStrictEqual([pula, rovinj, veruda])
    });
    test('Ako je place = veruda vrati []', () => {
        expect(getAllPlacesUnder(6)).toStrictEqual([])
    });
    test('Ako je place = rovinj vrati []', () => {
        expect(getAllPlacesUnder(4)).toStrictEqual([])
    });
    test('Ako je place = dalmacija vrati []', () => {
        expect(getAllPlacesUnder(5)).toStrictEqual([])
    });
    test('Ako je place = croatia vrati istria, pula, rovinj, veruda, dalmacija', () => {
        expect(getAllPlacesUnder(1)).toStrictEqual([istria, dalmacija, pula, rovinj, veruda])
    });
})
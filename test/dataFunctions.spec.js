import { computeStats, filterData, sortData } from '../src/lib/dataFunctions.js';
import { data as fakeData } from './../test/fakeData.js';

const testData = [fakeData[1], fakeData[3], fakeData[2], fakeData[0]];
const expectDataAsc = [fakeData[0], fakeData[1], fakeData[3], fakeData[2]];
const expectDataDesc = [fakeData[2], fakeData[3], fakeData[1], fakeData[0]];
const filterSpecie = [fakeData[0], fakeData[1]];
const filterPesonality = [fakeData[1], fakeData[3]];
const testDataFilterFe = [fakeData[0], fakeData[2]];

describe('Ordenar la data "asc"', () => {
  it('Debería ordenarse de forma ascendente y descendente', () => {
    const actualAsc = sortData(fakeData, "name", "asc");
    expect(actualAsc).toEqual(expectDataAsc);
    expect(sortData(testData, "name", "desc")).toEqual(expectDataDesc);
    expect(actualAsc[0].name).toBe("Bea");
    expect(actualAsc[0].name).not.toBe("Biskit");
    expect(actualAsc[actualAsc.length-1].name).toBe("Yuki");

  });
});

describe("Filtrar la data por especie, por género y por personalidad", () => {
  it("Debería filtrar los animales por género", () => {
    expect(filterData(fakeData, "gender", "Femenino")).toEqual(testDataFilterFe);
  })
  it("Debería filtrar los animales por especie", () => {
    expect(filterData(fakeData, "species", "Perro")).toEqual(filterSpecie);   
  })
  it("Debería filtrar los animales por personalidad", () => {
    expect(filterData(fakeData, "personality", "Perezoso")).toEqual(filterPesonality);   
  })
});

describe("Estadística númerica por género de los personajes", () => {
  it("Debería darnos la cantidad de personajes femeninos", () => {
    const actual = computeStats(fakeData, "gender");
    expect(actual.Femenino).toBe(2);
  })
  it("Debería darnos la cantidad de personajes con personalidad perezoso", () => {
    const actual = computeStats(fakeData, "personality");
    expect(actual.Perezoso).toBe(2);
  })
  it("Debería darnos la cantidad de personajes por especie 'ciervo'", () => {
    const actual = computeStats(fakeData, "species");
    expect(actual.Ciervo).toBe(1);
  })
});
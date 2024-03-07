export const sortData = (data, sortBy, sortOrder) => {
  data.sort((a, b) => {
    const valueA = a[sortBy];
    const valueB = b[sortBy];
    const compare = valueA.localeCompare(valueB);
    return sortOrder === "asc" ? compare : -compare;
  });
  return data;
};

export const filterData = (data, filterBy, value) => {
  const array = data.filter((items) => items[filterBy] === value);
  return array;
};

export const computeStats = (data, groupBy) => {
  const acumulador = data.reduce((acumulador, item) => {
    if (!acumulador[item[groupBy]]) {
      acumulador[item[groupBy]] = 1;
    } else {
      acumulador[item[groupBy]]++;
    }
    return acumulador;
  }, {});

  return acumulador;
};

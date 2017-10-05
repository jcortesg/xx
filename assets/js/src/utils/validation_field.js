export const required = (value) => {
  return (value ? undefined : 'Requerido');
}

export const number = (value) => {
  return (value && isNaN(Number(value)) ? 'Debe ser un numero' : undefined);
}

export const email = (value) => {
  return (value && !/[a-z0-9]+[_a-z0-9\.-]*[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})/ig.test(value) ? 'Email invalido' : undefined);
}

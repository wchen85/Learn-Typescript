export const dateStringtoDate = (dateString: string): Date => {
  // '28/10/2018'
  const dateParts = dateString
    .split('/') // ['28', '10', '2018']
    .map((value: string): number => {
      return parseInt(value); // [28, 10, 2018]
    });
  // Mounth for Date contructure starts at 0 so need to -1
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};

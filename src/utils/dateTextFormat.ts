export const dateTextFormat = (date: string) => {
  if (!date || date === "") return "";

  //date = 11122021
  const regex = /(\d{2})(\d{2})(\d{4})/;
  const newDate = date.replace(regex, "$1/$2/$3");
  return newDate;
};

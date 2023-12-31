export const getInitials = (name) => {
  const words = name.split(" ");
  const initials = words.map((word) => word.charAt(0).toUpperCase()).join("");
  return initials;
};
export const addCommasToNumber = (number) => {
  const numberString = number.toString();
  const numberWithCommas = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return numberWithCommas;
};

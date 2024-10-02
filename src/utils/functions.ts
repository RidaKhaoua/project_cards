/**
 * Truncates a string to a specified maximum length and appends three dots ("...") if the string exceeds that length.
 *
 * @param {string} str - The input string to be truncated.
 * @param {number} maxNumber - The maximum number of characters allowed in the string before truncation.
 * @returns {string} - The truncated string with three dots added if the length exceeds the specified maximum.
 */

export const removeTextAndReplaceItWithThreeDots = (
  str: string,
  maxNumber: number
): string => {
  return str.length <= maxNumber ? str : str.slice(0, maxNumber) + "...";
};

export const numberWithComas = (number: string): string => {
    const formattedNumber = new Intl.NumberFormat().format(Number(number));
  return number.toString().length === 4
    ? number.toString().slice(0, 1) + "," + number.toString().slice(1)
    : formattedNumber.toString();
};

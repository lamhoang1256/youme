export const slugify = (str: string) => {
  const arrWord = str.split(" ");
  for (let i = 0; i < arrWord.length; i += 1) {
    arrWord[i] = arrWord[i].charAt(0).toUpperCase() + arrWord[i].slice(1);
  }
  const strCapitalized = arrWord.join("");
  return strCapitalized;
};

export const shouldSkipValue = (value) => {
  const skippableStrings = [/[0-9]\./g, /\./g, /[0-9]+\./g];
  const unskippableString = /[0-9]\.[0-9]+/g;
  if (
    (!!value.match(skippableStrings[0]) ||
      !!value.match(skippableStrings[1]) ||
      !!value.match(skippableStrings[2])) &&
    !value.match(unskippableString)
  )
    return true;
  return false;
};

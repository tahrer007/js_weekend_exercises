//Ex5.6 - Mask

let Password = "ttt";
function maskPassword(Password) {
  let length = Password.length;
  if (length <= 4) return Password;

  let masked = "#".repeat(length - 4);
  let unmasked = Password.slice(length - 4, length);
  return masked.concat(unmasked);
}

console.log(maskPassword(Password + ""));

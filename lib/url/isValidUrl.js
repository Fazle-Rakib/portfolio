export default (str) => {
  try {
    new URL(str);
    console.log(`${str} is valid`);
    return true;
  } catch (error) {
    return false;
  }
}

const nullCheck = data => {
  for (const key in data) {
    if (data[key] === '') {
      return false;
    }
  }
  return true;
};

export { nullCheck };

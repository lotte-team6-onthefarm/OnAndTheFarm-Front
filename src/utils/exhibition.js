export const displayMap = (datas, key) => {
  const result = datas.filter(data => data.exhibitionModuleName === key);
  const data = result.map(data => {
    return {
      dataPicker: data.exhibitionDataPickerId,
      itemsId: data.exhibitionItemsId,
      accountName: data.exhibitionAccountName,
    };
  });
  return data;
};

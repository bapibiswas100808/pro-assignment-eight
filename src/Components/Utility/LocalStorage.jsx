const getFromLocalStorage = () => {
  const storedData = localStorage.getItem("stored-data");
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};

const saveToLocalStorage = (id) => {
  const storedData = getFromLocalStorage();
  const isExists = storedData.find((data) => data.bookId === parseInt(id));
  if (!isExists) {
    storedData.push(id);
    localStorage.setItem("stored-data", JSON.stringify(storedData));
  }
};
const getWishFromLocalStorage = () => {
  const storedData = localStorage.getItem("wish-data");
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};

const saveWishToLocalStorage = (id) => {
  const storedData = getWishFromLocalStorage();
  const isExists = storedData.find((data) => data.bookId === parseInt(id));
  if (!isExists) {
    storedData.push(id);
    localStorage.setItem("wish-data", JSON.stringify(storedData));
  }
};
const removeFromWishList = (id) => {
  const allWishData = getWishFromLocalStorage();
  const targetWish = allWishData.filter((dataId) => dataId !== id);
  localStorage.setItem("wish-data", JSON.stringify(targetWish));
};
export {
  getFromLocalStorage,
  saveToLocalStorage,
  getWishFromLocalStorage,
  saveWishToLocalStorage,
  removeFromWishList,
};

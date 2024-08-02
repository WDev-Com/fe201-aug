const todoArr = [];

const addTodo = (arr, item, priority) => {
  //   if (priority === "high") {
  //     return [item, ...arr];
  //   } else {
  //     return [...arr, item];
  //   }

  const newArr = [...arr];
  if (priority === "high") {
    newArr.unshift(item);
  } else {
    newArr.push(item);
  }
};

const clearTodo = (arr, index) => {
  const tempArr = [...arr];
  tempArr[index] = null;
  return tempArr;
};

const updateTodo = (arr, index, newItem) => {
  const tempArr = [...arr];
  tempArr[index] = newItem;
  return tempArr;
};

const getTodo = (arr, index) => {
  return index && index < arr.length ? arr[index] : arr;
};

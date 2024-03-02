export const getCategoryQuantity = (menu, products) => {
  for (let i = 0; i < menu.length; i++) {
    let count = 0;
    for (let j = 0; j < products.length; j++) {
      if (menu[i].category === products[j].parent) {
        count++;
      }
    }
    menu[i].count = count;
  }

  return [...menu];
};

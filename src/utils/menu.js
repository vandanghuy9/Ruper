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

export function formatDate(isoString) {
  const date = new Date(isoString);
  const options = { month: "long", day: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

export function calcuteRating(comment) {
  let rating = 0;
  let nonRating = 5;
  if (comment.length > 0) {
    for (let i = 0; i < comment.length; i++) {
      rating += comment[i].rating;
    }
    rating = Math.ceil(rating / comment?.length);
    nonRating = 5 - rating;
  }
  return { rating, nonRating };
}

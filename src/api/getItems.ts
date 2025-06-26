export interface ColorFruitItem {
  name: string;
  color: string;
}

function shuffleItems(array: ColorFruitItem[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

const sizes = ["tiny", "small", "medium", "large", "huge"];
const colors = [
  "navy",
  "blue",
  "aqua",
  "teal",
  "olive",
  "green",
  "lime",
  "yellow",
  "orange",
  "red",
  "maroon",
  "fuchsia",
  "purple",
  "silver",
  "gray",
  "black",
];
const fruits = [
  "apple",
  "banana",
  "watermelon",
  "orange",
  "peach",
  "tangerine",
  "pear",
  "kiwi",
  "mango",
  "durian",
  "grapefruit",
  "pineapple",
  "cherry",
  "plum",
];

const initialItems = sizes.reduce(
  (items: ColorFruitItem[], size) => [
    ...items,
    ...fruits.reduce(
      (acc: ColorFruitItem[], fruit) => [
        ...acc,
        ...colors.reduce(
          (acc: ColorFruitItem[], color) => [
            ...acc,
            {
              name: `${size} ${color} ${fruit}`,
              color,
            },
          ],
          []
        ),
      ],
      []
    ),
  ],
  []
);

export const items: ColorFruitItem[] = shuffleItems(initialItems);

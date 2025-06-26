import { useState } from "react";
import type { ColorFruitItem } from "../api/getItems";
import "./List.css";

interface ListItemProps {
  item: ColorFruitItem;
  onHandleClick: (item: ColorFruitItem) => void;
  selected: boolean;
}

interface ListProps {
  items: ColorFruitItem[];
}

const ListItem = ({ item, onHandleClick, selected }: ListItemProps) => {
  return (
    <a
      onClick={() => onHandleClick(item)}
      role="listitem"
      href="#"
      className={`List__item List__item--${item.color} ${
        selected ? "selected" : ""
      }`}
    >
      {item.name}
    </a>
  );
};

export function List({ items }: ListProps) {
  const [selectedItems, setSelectedItems] = useState<ColorFruitItem[]>([]);
  const [initialItems, setInitialItems] = useState(items);

  const isSelected = (item: ColorFruitItem) => selectedItems.includes(item);

  const handleClick = (item: ColorFruitItem) => {
    if (isSelected(item)) {
      // remove from selectedItems at top, add to initialItem list
      setSelectedItems((prev) => prev.filter((itm) => itm !== item));
      setInitialItems((prev) => [item, ...prev]);
      return;
    } else {
      // add to selectedItems at top, remove from initialItem list
      setSelectedItems((prev) => [...prev, item]);
      setInitialItems((prev) => prev.filter((itm) => itm !== item));
      return;
    }
  };

  return (
    <>
      <ul className="List">
        {[
          ...(selectedItems.length > 0 ? selectedItems : []),
          ...initialItems,
        ].map((item) => (
          <ListItem
            selected={isSelected(item)}
            key={item.name}
            item={item}
            onHandleClick={handleClick}
          />
        ))}
      </ul>
    </>
  );
}

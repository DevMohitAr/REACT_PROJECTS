import React from 'react'
import { DisplayItems } from './DisplayItems';
export const ShowAll = ({items,setItems}) => {
  return (
    <>
      {items &&
        items.map((item) => {
          return (
            <DisplayItems
              key={item.id}
              {...item}
              items={items}
              setItems={setItems}
            />
          );
        })}
    </>
  );
}

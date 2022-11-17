import { Autocomplete, Avatar, Group, Text } from '@mantine/core';
import { map } from 'lodash';
import { forwardRef, useState } from 'react';
import { foodItems } from './data/inventory';

export function FoodAutocomplete() {
  const [value, setValue] = useState('');

  return (
    <Autocomplete
      onItemSubmit={({ id }) => {
        // TODO: Dispatch here to add to cart
        setValue('');
      }}
      onChange={(v) => setValue(v)}
      value={value}
      placeholder="Add Product to Cart"
      itemComponent={getAutocompleteItem()}
      data={map(foodItems, itemsToDropdown)}
      limit={10}
      filter={(value, item) => item.value.toLowerCase().includes(value.toLowerCase().trim())}
    />
  );
}

function getAutocompleteItem() {
  return forwardRef(({ value, image, ...others }, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />
        <div>
          <Text>{value}</Text>
        </div>
      </Group>
    </div>
  ));
}

function itemsToDropdown({ product, picture, id }) {
  return {
    value: product,
    image: picture,
    id,
  };
}

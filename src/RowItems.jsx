import React from 'react';
import { Grid, Center, Text, Image } from '@mantine/core';
import { map } from 'lodash';

export function ItemsRowsContainer() {
  // TODO: Add Redux integration Here

  // TODO: Create a selector to get the items in the cart
  const items = [];

  return (
    <Grid>
      <ItemHeader />
      {items.length
        ? map(items, (item) => (
            <ItemRow
              picture={item.picture}
              product={item.product}
              price={item.price}
              quantity={1}
              priceTotal={item.price}
              key={item.id}
            />
          ))
        : null}
    </Grid>
  );
}

//  -------------------------------- PRIVATE ELEMENTS --------------------------------  //

function ItemRow({ picture, product, price, quantity, priceTotal }) {
  return (
    <>
      <Grid.Col span={2}>
        <Center>
          <Image radius="md" src={picture} width={40} height={40} />
        </Center>
      </Grid.Col>
      <Grid.Col span={5}>{product}</Grid.Col>
      <Grid.Col span={1}>
        <Center>{quantity}</Center>
      </Grid.Col>
      <Grid.Col span={2}>
        <Center>{price}</Center>
      </Grid.Col>
      <Grid.Col span={2}>
        <Center>{priceTotal}</Center>
      </Grid.Col>
    </>
  );
}

function ItemHeader() {
  return (
    <>
      <Grid.Col span={2}></Grid.Col>
      <Grid.Col span={5}>
        <Text fw={700}>Item</Text>
      </Grid.Col>
      <Grid.Col span={1}>
        <Center>
          <Text fw={700}>Quantity</Text>
        </Center>
      </Grid.Col>
      <Grid.Col span={2}>
        <Center>
          <Text fw={700}>Price</Text>
        </Center>
      </Grid.Col>
      <Grid.Col span={2}>
        <Center>
          <Text fw={700}>Item Subtotal</Text>
        </Center>
      </Grid.Col>
    </>
  );
}

import React from 'react';
import { Flex, Center, Container, Title, Divider, Paper, Space } from '@mantine/core';
import { SubTotalsContainer } from '../Subtotals';
import { ItemsRowsContainer } from '../RowItems';
import { FoodAutocomplete } from '../FoodAutocomplete';
import { ResetButton } from '../ResetButton';

export function App() {
  return (
    <Container>
      <Center style={{ height: 100 }}>
        <Title order={3} size="h1">
          Grocery Checkout
        </Title>
      </Center>
      <ResetButton />
      <Space h="md" />
      <FoodAutocomplete />
      <Divider my="sm" />
      <Paper shadow="sm" p="sm" radius="md">
        <ItemsRowsContainer />
        <Divider my="sm" />
        <Flex mih={50} gap="sm" justify="flex-end" align="flex-start" direction="row" wrap="wrap">
          <SubTotalsContainer />
        </Flex>
      </Paper>
    </Container>
  );
}

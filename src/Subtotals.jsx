import React from 'react';
import { Text, Stack, Flex, Divider } from '@mantine/core';
import currency from 'currency.js';

export function SubTotalsContainer() {
  // TODO: Use Redux Selectors to calculate the subtotal and the tax
  return (
    <Stack spacing="xs">
      <Flex {...getFlex()}>
        <Text fz="xl">Subtotal</Text>
        <Text fz="xl">{formatCurrency('$0.00')}</Text>
      </Flex>
      <Flex {...getFlex()}>
        <Text fz="xl">Tax</Text>
        <Text fz="xl">7.00%</Text>
      </Flex>
      <Flex {...getFlex()}>
        <Divider style={{ width: '300px' }} my="sm" />
      </Flex>
      <Flex {...getFlex()}>
        <Text fz="xl">Total</Text>
        <Text fz="xl">{formatCurrency('$0.00')}</Text>
      </Flex>
    </Stack>
  );
}

function formatCurrency(v) {
  return currency(v).format();
}

function getFlex() {
  return {
    mih: 20,
    gap: 'lg',
    justify: 'flex-end',
    align: 'flex-start',
    direction: 'row',
    wrap: 'wrap',
    style: { width: '500px', paddingRight: '50 px' },
  };
}

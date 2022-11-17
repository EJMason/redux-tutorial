import { Button } from '@mantine/core';
import React from 'react';

export function ResetButton() {
  return (
    <Button
      color="red"
      onClick={() => {
        // TODO: Dispatch here to remove all elements
      }}
    >
      Reset
    </Button>
  );
}

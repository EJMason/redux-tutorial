import { MantineProvider } from '@mantine/core';
import React from 'react';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './store';

export function AppRoot() {
  return (
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </Provider>
  );
}

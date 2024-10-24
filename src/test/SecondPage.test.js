import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import SecondPage from '../components/SecondPage/SecondPage';

test('renders SecondPage component', () => {
  render(
    <Router>
      <Provider store={store}>
        <SecondPage collapsed={false} />
      </Provider>
    </Router>
  );

  // Test if the component renders
  const secondPageComponent = screen.getByTestId('second-page-component');
  expect(secondPageComponent).toBeInTheDocument();

});

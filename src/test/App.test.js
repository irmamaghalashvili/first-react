import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from '../App';
import Education from '../components/Education';
import Portfolio from '../components/Portfolio';
import Box from '../components/Box/Box';
import Button from '../components/Button/Button';

test('renders App component', () => {
  render(<App />);
  const appElement = screen.getByTestId('app-component');
  expect(appElement).toBeInTheDocument();
});

test('renders Education component with h3', () => {
  render(<Education />);
  const educationElement = screen.getByTestId('education-component');
  expect(educationElement).toBeInTheDocument();

  const h3Element = screen.getByRole('heading', { level: 3, name: /Education/i });
  expect(h3Element).toBeInTheDocument();
});

test('renders Portfolio component', () => {
  render(
    <Provider store={store}>
      <Portfolio />
    </Provider>
  );
  const portfolioElement = screen.getByTestId('portfolio-component');
  expect(portfolioElement).toBeInTheDocument();
});

test('sets active tab to "all" on button click', () => {
  render(
    <Provider store={store}>
      <Portfolio />
    </Provider>
  );

  const allButton = screen.getByText('All');
  fireEvent.click(allButton);
});

test('sets active tab to "code" on button click', () => {
  render(
    <Provider store={store}>
      <Portfolio />
    </Provider>
  );

  const codeButton = screen.getByText('Code');
  fireEvent.click(codeButton);
});

test('renders Box component', () => {
  render(<Box />);
  const boxElement = screen.getByText('About Me');
  expect(boxElement).toBeInTheDocument();
});

test('renders Button component', () => {
  render(<Button onClick={() => {}} text="Click Me" icon={<span>Icon</span>} />);
  const buttonElement = screen.getByText('Click Me');
  expect(buttonElement).toBeInTheDocument();
});
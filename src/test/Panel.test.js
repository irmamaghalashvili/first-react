import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Panel from '../components/Panel/index';

test('renders Panel component', () => {
  const mockOnCollapse = jest.fn();

  render(
    <Router>
      <Panel collapsed={false} onCollapse={mockOnCollapse} />
    </Router>
  );

  // Test if the navigation is rendered
  const navigationComponent = screen.getByTestId('navigation-component');
  expect(navigationComponent).toBeInTheDocument();

  // Test if the buttons are rendered
  const goBackButton = screen.getByText('Go back');
  const collapseButton = screen.getByText('≡');

  expect(goBackButton).toBeInTheDocument();
  expect(collapseButton).toBeInTheDocument();

  // Test click event for Go back button
  fireEvent.click(goBackButton);
  expect(mockOnCollapse).toHaveBeenCalledTimes(1);

  // Test click event for Collapse button
  fireEvent.click(collapseButton);
  expect(mockOnCollapse).toHaveBeenCalledTimes(2);
});

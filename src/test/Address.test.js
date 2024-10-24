import React from 'react';
import { render, screen } from '@testing-library/react';
import Address from '../components/Address';

test('renders Contact component', () => {
  render(<Address />);
  const contactElement = screen.getByText('Contact');
  expect(contactElement).toBeInTheDocument();
});

test('renders all contact items', () => {
  render(<Address />);
  const contactItems = screen.getAllByRole('listitem');
  expect(contactItems).toHaveLength(6);
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Experience from '../components/Experience/index';

jest.mock('../TimeLine/experience.json', () => [
  {
    info: {
      company: 'CREDO BANK',
      job: 'External Sales Support Officer',
    },
    date: '2021',
  },
]);

test('renders Experience component', () => {
  render(<Experience />);
  const experienceElement = screen.getByTestId('experience-component');
  expect(experienceElement).toBeInTheDocument();
});

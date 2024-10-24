import React from 'react';
import { render, screen } from '@testing-library/react';
import Education from '../components/Education/index';

jest.mock('../TimeLine/education.json', () => [
  {
    info: {
      title: 'Bachelor/Accounting - Tax Specialty/ Sukhishvili University, Gori',
    },
    data: '2006-2010',
  },
]);

test('renders Education component', () => {
  render(<Education />);
  const educationElement = screen.getByTestId('education-component');
  expect(educationElement).toBeInTheDocument();

});

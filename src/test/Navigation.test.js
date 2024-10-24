import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../components/Navigation/index';

test('renders Navigation component', () => {
  render(
    <Router>
      <Navigation collapsed={false} />
    </Router>
  );

  const educationNavItem = screen.getByText('Education');
  expect(educationNavItem).toBeInTheDocument();

  const experienceNavItem = screen.getByText('Experience');
  expect(experienceNavItem).toBeInTheDocument();

  const homeNavItem = screen.getByText('Home');
  expect(homeNavItem).toBeInTheDocument();

  // Collapsed state
  render(
    <Router>
      <Navigation collapsed={true} />
    </Router>
  );

  // Test logic for collapsed state
  const collapsedEducationNavItem = screen.getByText('Education');
  expect(collapsedEducationNavItem).toBeInTheDocument();

  const collapsedexperienceNavItem = screen.getByText('Experience');
  expect(collapsedexperienceNavItem).toBeInTheDocument();

  const collapsedhomeNavItem = screen.getByText('Home');
  expect(collapsedhomeNavItem).toBeInTheDocument();
});

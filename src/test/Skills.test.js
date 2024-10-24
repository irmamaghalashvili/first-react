import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Skills from '../components/Skills/index';


test('renders Skills component', () => {
  render(
    <Provider store={store}>
      <Skills />
    </Provider>
  );
});

test('renders "Open edit" button', () => {
  render(
    <Provider store={store}>
      <Skills />
    </Provider>
  );
  const openEditButton = screen.getByText('Open edit');
  expect(openEditButton).toBeInTheDocument();
});

test('renders form when "Open edit" button is clicked', () => {
  render(
    <Provider store={store}>
      <Skills />
    </Provider>
  );
  const openEditButton = screen.getByText('Open edit');
  fireEvent.click(openEditButton);

  const skillNameInput = screen.getByPlaceholderText('Enter skill Name');
  const skillRangeInput = screen.getByPlaceholderText('Enter skill Range');
  const addSkillButton = screen.getByText('Add Skill');

  expect(skillNameInput).toBeInTheDocument();
  expect(skillRangeInput).toBeInTheDocument();
  expect(addSkillButton).toBeInTheDocument();
});

test('submits form and adds skill correctly', () => {
  render(
    <Provider store={store}>
      <Skills />
    </Provider>
  );
  const openEditButton = screen.getByText('Open edit');
  fireEvent.click(openEditButton);

  const skillNameInput = screen.getByPlaceholderText('Enter skill Name');
  const skillRangeInput = screen.getByPlaceholderText('Enter skill Range');
  const addSkillButton = screen.getByText('Add Skill');

  fireEvent.change(skillNameInput, { target: { value: 'React' } });
  fireEvent.change(skillRangeInput, { target: { value: '80' } });
  fireEvent.click(addSkillButton);

  const addedSkill = screen.getByText('React');
  expect(addedSkill).toBeInTheDocument();
});

test('sets skills based on Redux data', () => {
  render(
    <Provider store={store}>
      <Skills />
    </Provider>
  );

});

test('displays error message for invalid skill range', () => {
  render(
    <Provider store={store}>
      <Skills />
    </Provider>
  );

  const openEditButton = screen.getByText('Open edit');
  fireEvent.click(openEditButton);

  const skillRangeInput = screen.getByPlaceholderText('Enter skill Range');
  fireEvent.change(skillRangeInput, { target: { value: '200' } });

  const errorMessage = screen.getByText('Skill range must be between 10 and 100');
  expect(errorMessage).toBeInTheDocument();
});

test('displays error message for missing skill name', () => {
  render(
    <Provider store={store}>
      <Skills />
    </Provider>
  );

  const openEditButton = screen.getByText('Open edit');
  fireEvent.click(openEditButton);

  const addSkillButton = screen.getByText('Add Skill');
  fireEvent.click(addSkillButton);

  const errorMessage = screen.getByText('Skill name is required');
  expect(errorMessage).toBeInTheDocument();
});

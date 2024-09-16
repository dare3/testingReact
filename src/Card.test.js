import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../Card';

// Smoke test: Checks if Card component renders without crashing
test('renders Card component', () => {
  render(<Card caption="Test Caption" src="test.jpg" currNum={1} totalNum={5} />);
  expect(screen.getByText('Test Caption')).toBeInTheDocument();
  expect(screen.getByAltText('Test Caption')).toBeInTheDocument();
  expect(screen.getByText('Image 1 of 5.')).toBeInTheDocument();
});

// Snapshot test: Checks if Card component matches the snapshot
test('matches snapshot', () => {
  const { asFragment } = render(<Card caption="Test Caption" src="test.jpg" currNum={1} totalNum={5} />);
  expect(asFragment()).toMatchSnapshot();
});

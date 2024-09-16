import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import Carousel from '../Carousel';

// Mock the Carousel component
jest.mock('../Carousel', () => (props) => <div>Carousel Mock - {props.title}</div>);

test('renders App component with Carousel', () => {
  render(<App />);
  
  // Check if Carousel is rendered
  expect(screen.getByText('Carousel Mock - Shells from far-away beaches')).toBeInTheDocument();
});

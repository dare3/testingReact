import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Carousel from '../Carousel';
import TEST_IMAGES from '../_testCommon'; // Adjust the import path as needed
import userEvent from '@testing-library/user-event';

// Define some test images
const photos = [
  { src: 'https://example.com/photo1.jpg', caption: 'First Image' },
  { src: 'https://example.com/photo2.jpg', caption: 'Second Image' },
];

const TEST_IMAGES = [
  { src: 'https://example.com/testing_image_1.jpg', caption: 'testing image 1' },
  { src: 'https://example.com/testing_image_2.jpg', caption: 'testing image 2' },
];

describe('Carousel Component Tests', () => {
  
  // Test right arrow functionality
  test('clicking right arrow moves to the next image', () => {
    render(<Carousel photos={TEST_IMAGES} title="Test Carousel" />);

    // Initial assertions
    expect(screen.getByAltText('testing image 1')).toBeInTheDocument();
    expect(screen.queryByAltText('testing image 2')).not.toBeInTheDocument();

    // Move forward
    const rightArrow = screen.getByLabelText('right arrow');
    fireEvent.click(rightArrow);

    // Assertions after clicking the right arrow
    expect(screen.queryByAltText('testing image 1')).not.toBeInTheDocument();
    expect(screen.getByAltText('testing image 2')).toBeInTheDocument();
  });

  // Test left arrow functionality
  test('clicking left arrow moves to the previous image', () => {
    render(<Carousel photos={photos} title="Test Carousel" />);

    // Move to the second image
    const rightArrow = screen.getByLabelText('right arrow');
    userEvent.click(rightArrow);

    // Verify the second image is displayed
    expect(screen.getByText('Second Image')).toBeInTheDocument();

    // Move back to the first image
    const leftArrow = screen.getByLabelText('left arrow');
    userEvent.click(leftArrow);

    // Verify the first image is displayed
    expect(screen.getByText('First Image')).toBeInTheDocument();
  });

  // Test hidden arrows
  test('left arrow is hidden on the first image, right arrow is hidden on the last image', () => {
    render(<Carousel photos={photos} title="Test Carousel" />);

    // Initial check: left arrow should be hidden
    expect(screen.queryByLabelText('left arrow')).not.toBeInTheDocument();

    // Move to the second image
    const rightArrow = screen.getByLabelText('right arrow');
    userEvent.click(rightArrow);

    // Check that the left arrow is now visible and the right arrow is hidden
    expect(screen.getByLabelText('left arrow')).toBeInTheDocument();
    expect(screen.queryByLabelText('right arrow')).not.toBeInTheDocument();
  });
});

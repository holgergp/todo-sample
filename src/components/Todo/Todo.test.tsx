import React from 'react';
import { render, screen } from '@testing-library/react';
import Todo from "./Todo";

test('renders', () => {
  render(<Todo />);
  const headline = screen.getByText(/Todo App/i);
  expect(headline).toBeInTheDocument();
});

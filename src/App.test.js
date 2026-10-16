// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders OutlineCircle title', () => {
    render(<App />);
    const titleElement = screen.getByText(/OutlineCircle/i);
    expect(titleElement).toBeInTheDocument();
});

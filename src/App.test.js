import { render, screen } from '@testing-library/react';
import Crtacc from './Crtacc';


test('renders learn react link', () => {
  render(<Crtacc />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

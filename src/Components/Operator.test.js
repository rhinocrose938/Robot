import { render, screen } from '@testing-library/react';
import Operator from './Operator';

test('renders Operator component', () => {
  render(<Operator/>);
  const element = screen.getByTestId("Operator");
  expect(element).toBeInTheDocument();
});
import { render, screen } from '@testing-library/react';
import Cell from './Cell';

test('renders Cell component', () => {
  const obj = { x: 0, y: 0, occupied: false, dir: 'North' }
  render(<Cell obj={obj}/>);
  const element = screen.getAllByTestId("Cell")[0];
  expect(element).toBeInTheDocument();
});
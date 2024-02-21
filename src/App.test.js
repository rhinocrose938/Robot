import { render } from '@testing-library/react';
import App from './App';

it('Renders with a className equal to the variant', () => {
  const { container } = render(<App/>)
  expect(container.firstChild).toHaveClass('App')
})

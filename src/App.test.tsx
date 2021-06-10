import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./Routes', () => ({
  __esModule: true,
  default: () => <div data-testid="app-routes" />,
}));

test('renders learn react link', () => {
  render(<App />);
  expect(screen.queryByTestId('app-routes')).toBeInTheDocument();
});

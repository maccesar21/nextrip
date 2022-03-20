import { render, screen } from '@testing-library/react';
import axios from 'axios';
import Routes from '../Routes/Routes';

jest.mock('axios');

describe('Routes select menu', () => {
  let metroRoutes = [];

  test('if we are receiving bus routes data', () => {
    metroRoutes = [{
      "route_id": "901",
      "agency_id": 0,
      "route_label": "METRO Blue Line"
    }];

    const resp = {data: metroRoutes};
    axios.get.mockResolvedValue(resp);
    axios.get.mockImplementation(() => Promise.resolve(resp));
  });
  
  it('renders routes dropdown with at least one option', () => {
    render(
      <Routes 
        metroRoutes={metroRoutes} />
    );

    const dropdown = screen.getByTestId('dropdown');
    expect(dropdown).toBeInTheDocument();

    const options = screen.getAllByTestId('select-option');
    expect(options.length).toBeGreaterThan(0);
  });
});
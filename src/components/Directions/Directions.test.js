import { render, screen } from '@testing-library/react';
import axios from 'axios';
import Directions from '../Directions/Directions';

jest.mock('axios');

describe('Directions dropdown', () => {
  let selectedMetroRoute = "901";
  let metroDirections = {};
  
  test('if we are receiving routes directions data', () => {
    metroDirections = [
      {
        "direction_id": 0,
        "direction_name": "Northbound"
      },
      {
        "direction_id": 1,
        "direction_name": "Southbound"
      }
     ];

    const resp = {data: metroDirections};
    axios.get.mockResolvedValue(resp);
    axios.get.mockImplementation(() => Promise.resolve(resp));
  });

  it('should render directions dropdown with two or more options', () => {
    render(
      <Directions 
        selectedMetroRoute={selectedMetroRoute}
        metroDirections={metroDirections} />
    );

    const dropdown = screen.getByTestId('direction-select');
    expect(dropdown).toBeInTheDocument();

    const options = screen.getAllByTestId('direction-options');
    expect(options.length).toBeGreaterThanOrEqual(2);
  });
});
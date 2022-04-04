import getLevel from '../getLevel';
import fetchData from '../fetchData';

jest.mock('../fetchData');

beforeEach(() => {
  jest.resetAllMocks();
});
test('getLevel test', () => {
  fetchData.mockReturnValue(JSON.stringify({}));
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

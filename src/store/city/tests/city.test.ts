import { getCologneObject, getParisObject } from '../../../common/test-utils';
import { changeCity, cityData } from '../city.slice';

describe('City Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = getCologneObject();

    const result = cityData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return initial state with empty action and undefined state', () => {
    const emptyAction = {type: ''};
    const expectedState = getParisObject();

    const result = cityData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should change city with "changeCity" action', () => {
    const initialState = getParisObject();
    const expectedState = getCologneObject();

    const result = cityData.reducer(initialState, changeCity({
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    }));

    expect(result).toEqual(expectedState);
  });
});

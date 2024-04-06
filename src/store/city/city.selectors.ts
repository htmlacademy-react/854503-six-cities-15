import { NameSpace } from '../../const';
import { City, State } from '../../types';

export const getCurrentCity = (state: State): City => state[NameSpace.CityData].city;

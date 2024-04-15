import { internet, image, name, lorem, datatype, date, address } from 'faker';
import { CITIES_LOCATION } from '../const';
import { CitiesNames, CityData, Offer, OfferCardType, ReviewType, UserData } from '../types';

export function getParisObject(): CityData {
  return {
    city: CITIES_LOCATION.Paris
  };
}

export function getCologneObject(): CityData {
  return {
    city: CITIES_LOCATION.Cologne
  };
}

export function makeFakeProUserData(): UserData {
  return {
    avatarUrl: image.avatar(),
    email: internet.email(),
    token: lorem.word(),
    isPro: true,
    name: name.firstName(),
  };
}

export function makeFakeReview(): ReviewType {
  return {
    id: datatype.uuid(),
    date: date.recent().toString(),
    user: {
      name: name.firstName(),
      avatarUrl: image.avatar(),
      isPro: true,
    },
    comment: lorem.sentence(),
    rating: datatype.number(5),
  };
}

export function makeFakeOffer(): OfferCardType {
  return {
    id: datatype.uuid(),
    title: lorem.sentence(),
    type: lorem.word(),
    price: datatype.number(),
    city: {
      name: Object.keys(CITIES_LOCATION)[datatype.number(5)] as CitiesNames,
      location: {
        latitude: Number(address.latitude()),
        longitude: Number(address.longitude()),
        zoom: datatype.number(5),
      },
    },
    location: {
      latitude: Number(address.latitude()),
      longitude: Number(address.latitude()),
      zoom: datatype.number(5),
    },
    isFavorite: true,
    isPremium: true,
    rating: datatype.number(5),
    previewImage: image.imageUrl(),
  };
}

export function makeFakeDetailedOffer() {
  return {
    id: datatype.uuid(),
    title: lorem.sentence(),
    type: lorem.word(),
    price: datatype.number(),
    city: {
      name: Object.keys(CITIES_LOCATION)[datatype.number(5)] as CitiesNames,
      location: {
        latitude: Number(address.latitude()),
        longitude: Number(address.longitude()),
        zoom: datatype.number(5),
      },
    },
    location: {
      latitude: Number(address.latitude()),
      longitude: Number(address.longitude()),
      zoom: datatype.number(5),
    },
    isFavorite: datatype.boolean(),
    isPremium: datatype.boolean(),
    rating: datatype.number(5),
    description: lorem.sentences(2),
    bedrooms: datatype.number(5),
    goods: new Array(5).fill(null).map(() => lorem.word()),
    host: {
      name: name.firstName(),
      avatarUrl: image.avatar(),
      isPro: true,
    },
    images: new Array(5).fill(null).map(() => image.image()),
    maxAdults: datatype.number(5),
  };
}

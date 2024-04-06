import { Offer, OfferCardType } from '../types/offer';

export const OFFERS: Offer[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }},
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 2,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    images: [
      'img/apartment-01.jpg'
    ],
    maxAdults: 4
  },
  {
    id: 'fce5564f-9acd-44ea-8a1a-aee1bbf8b407',
    title: 'Beautiful & luxurious studio at great location',
    type: 'room',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }},
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 3,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    images: [
      'img/apartment-02.jpg'
    ],
    maxAdults: 4
  },
  {
    id: 'b2df8770-4bfe-47ab-87cd-77b9a758a4c6',
    title: 'Beautiful & luxurious studio at great location',
    type: 'house',
    price: 90,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }},
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 5,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    images: [
      'img/apartment-03.jpg'
    ],
    maxAdults: 4
  },
  {
    id: '8373b286-7f1f-4326-b316-e09e3840337f',
    title: 'Beautiful & luxurious studio at great location',
    type: 'hotel',
    price: 30,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }},
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    },
    images: [
      'img/room.jpg'
    ],
    maxAdults: 4
  },
];

export const OFFER_CARDS: OfferCardType[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }},
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 2,
    previewImage: 'img/apartment-01.jpg'
  },
  {
    id: 'fce5564f-9acd-44ea-8a1a-aee1bbf8b407',
    title: 'Beautiful & luxurious studio at great location',
    type: 'room',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }},
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 3,
    previewImage: 'img/apartment-02.jpg'
  },
  {
    id: 'b2df8770-4bfe-47ab-87cd-77b9a758a4c6',
    title: 'Beautiful & luxurious studio at great location',
    type: 'house',
    price: 90,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }},
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 5,
    previewImage: 'img/apartment-03.jpg'
  },
  {
    id: '8373b286-7f1f-4326-b316-e09e3840337f',
    title: 'Beautiful & luxurious studio at great location',
    type: 'hotel',
    price: 30,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }},
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'img/room.jpg'
  },
];

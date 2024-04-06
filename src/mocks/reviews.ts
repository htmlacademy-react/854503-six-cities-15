import { ReviewType } from '../types/index';

export const REVIEWS: ReviewType[] = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2018-01-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 3
  },
  {
    id: '227444a2-3c9c-456d-996b-b3dc6d339ee6',
    date: '2019-02-08T14:13:56.569Z',
    user: {
      name: 'Max Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    comment: 'If you\'re looking for random paragraphs, you\'ve come to the right place.',
    rating: 4
  },
  {
    id: 'd98fb40e-4135-4cf8-a806-3fbdbf20022c',
    date: '2019-12-08T14:13:56.569Z',
    user: {
      name: 'Oliver',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    comment: 'When a random word or a random sentence isn\'t quite enough, the next logical step is to find a random paragraph.',
    rating: 5
  }
];

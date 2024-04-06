import ReviewForm from '../review-form/review-form';
import ReviewsList from '../reviews-list/reviews-list';
import { useAppSelector } from '../../hooks';
import { getReviews } from '../../store/reviews-process/reviews-process.selectors';
import { getAuthCheckedStatus } from '../../store/user-process/user-process.selectors';
import { ReviewType } from '../../types';

type ReviewsProps = {
  offerId: string;
}

export default function Reviews({offerId}: ReviewsProps): JSX.Element {
  const reviews: ReviewType[] = useAppSelector(getReviews);
  const isAuth = useAppSelector(getAuthCheckedStatus);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList reviews={reviews}/>
      {
        isAuth && <ReviewForm offerId={offerId}/>
      }
    </section>
  );
}

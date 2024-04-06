import { ReviewType } from '../../types';
import ReviewItem from '../review-item/review-item';

type ReviewsListProps = {
  reviews: ReviewType[];
}

function getReviews(reviews: ReviewType[]){
  return reviews.map((review) => <ReviewItem review={review} key={review.id}/>);
}

export default function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {getReviews(reviews)}
    </ul>
  );
}

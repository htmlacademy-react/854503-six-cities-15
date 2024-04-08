import { ChangeEvent, FormEvent, Fragment, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { UserReview } from '../../types';
import { postUserReviewAction } from '../../store/reviews-process/reviews-process.thunks';
import { toast } from 'react-toastify';
import { getLoadingStatus, getUserReviewLoading } from '../../store/reviews-process/reviews-process.selectors';

const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 300;

type ReviewFormProps = {
  offerId: string;
}

const RATING_MAP: Record<string, string> = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect'
};

function handleRatingInputChange(evt: ChangeEvent<HTMLInputElement>, handler: (value: number) => void) {
  handler(Number(evt.target.value));
}

function onMessageTextAreaChange(evt: ChangeEvent<HTMLTextAreaElement>, handler: (value: string) => void) {
  evt.preventDefault();
  handler(evt.target.value);
}

export default function ReviewForm({offerId}: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getUserReviewLoading);
  const isSucceeded = useAppSelector(getLoadingStatus);

  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');

  function clearForm() {
    setRating(0);
    setMessage('');
  }

  useEffect(() => {
    if (!isLoading && isSucceeded) {
      clearForm();
    }
  },[isLoading, isSucceeded]);

  function isValid() {
    return !!rating && (message.length >= MIN_REVIEW_LENGTH && message.length <= MAX_REVIEW_LENGTH);
  }

  function handleFormSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    if (!isValid()) {
      toast.warn('Form is not valid');
      return;
    }

    const userReview: UserReview = {
      offerId,
      review: {
        rating,
        comment: message
      }
    };

    dispatch(postUserReviewAction(userReview));
  }

  return (
    <form onSubmit={handleFormSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          Object.keys(RATING_MAP).map((item) => (
            <Fragment key={RATING_MAP[item]}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={item}
                id={`${item}-stars`}
                type="radio"
                checked={Number(item) === rating}
                disabled={isLoading}
                onChange={(evt) => handleRatingInputChange(evt, setRating)}
              />
              <label
                htmlFor={`${item}-stars`}
                className="reviews__rating-label form__rating-label"
                title={RATING_MAP[item]}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          )).reverse()
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={message}
        disabled={isLoading}
        onChange={(evt) => onMessageTextAreaChange(evt, setMessage)}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isLoading || !isValid()}
        >
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

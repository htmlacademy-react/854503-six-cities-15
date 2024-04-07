import { MouseEvent, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute, DEFAULT_BOOKMARK_IMAGE_SIZE } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthCheckedStatus } from '../../store/user-process/user-process.selectors';
import { ImageSizeType } from '../../types';
import { addOfferToFavoriteAction } from '../../store/offers-process/offers-process.thunks';
import { getOffersDataUpdating } from '../../store/offers-process/offers-process.selectors';

type BookmarkButtonProps = {
  offerId: string;
  blockClass: string;
  isFavorite: boolean;
  imageSize?: ImageSizeType;
}

function BookmarkButton({
  offerId,
  isFavorite,
  blockClass,
  imageSize = DEFAULT_BOOKMARK_IMAGE_SIZE
}: BookmarkButtonProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isAuth = useAppSelector(getAuthCheckedStatus);
  const isLoading = useAppSelector(getOffersDataUpdating);

  const isActive = isAuth && isFavorite;

  function handleBookmarkClick(evt: MouseEvent<HTMLButtonElement>) {
    evt.preventDefault();

    if (!isAuth) {
      navigate(AppRoute.Login);
    }

    dispatch(addOfferToFavoriteAction({
      offerId,
      status: Number(!isFavorite)
    }));
  }

  return (
    <button
      className={`
      ${blockClass}__bookmark-button
      button
      ${isActive ? `${blockClass}__bookmark-button--active` : ''}
      `}
      type="button"
      onClick={handleBookmarkClick}
      disabled={isLoading}
    >
      <svg
        className={`${blockClass}__bookmark-icon`}
        width={imageSize.width}
        height={imageSize.height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
}

export const MemoBookmarkButton = memo(BookmarkButton);

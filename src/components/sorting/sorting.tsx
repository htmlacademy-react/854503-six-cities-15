import { memo, useEffect, useState } from 'react';
import { SORT_BY_VALUES } from '../../const';
import { SortingType } from '../../types';


type SortingProps = {
  sortBy: string;
  onSortingChange: (value: SortingType) => void;
}

function Sorting({sortBy, onSortingChange}: SortingProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function escapeKeydownHandler(evt: KeyboardEvent) {
      if (evt.key === 'Escape' && isOpen) {
        evt.preventDefault();
        setIsOpen(false);
      }
    }
    document.addEventListener('keydown', escapeKeydownHandler);

    return () => {
      document.removeEventListener('keydown', escapeKeydownHandler);
    };
  });

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={() => setIsOpen(!isOpen)} className="places__sorting-type" tabIndex={0}>
        {sortBy}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen && 'places__options--opened'}`}>
        {
          SORT_BY_VALUES.map((value: SortingType) => (
            <li
              className={`places__option ${sortBy === value && 'places__option--active'}`}
              tabIndex={0}
              key={value}
              onClick={() => {
                onSortingChange(value);
                setIsOpen(!isOpen);
              }}
            >
              {value}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export const MemoSorting = memo(Sorting);

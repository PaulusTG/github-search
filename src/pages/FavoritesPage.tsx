import React from 'react';
import { useActions } from '../hooks/actions';
import { useAppSelector } from '../hooks/redux';

function FavoritesPage() {
  const { removeFavorite } = useActions();
  const { favorites } = useAppSelector((state) => state.github);

  if (favorites.length === 0) return <p className="text-center">No items.</p>;

  const removeFromFavorite = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    removeFavorite(evt.currentTarget.id);
  };

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
        {favorites.map((item) => (
          <li
            key={`li_${item}`}
            className="flex justify-between items-center border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all"
          >
            <a
              href={`a_${item}`}
              target="_blank"
              rel="noreferrer"
              className="mr-4"
            >
              {item}
            </a>
            <button
              className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
              onClick={removeFromFavorite}
              key={`btn_${item}`}
              id={item}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoritesPage;

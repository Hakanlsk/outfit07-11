import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "../App.css";

function FilteredClothesList({ filteredClothes, favoriteIds, toggleFavorite }) {

  

  console.log(favoriteIds)

  return (
    <div>
      {filteredClothes.length === 0 ? (
        <p>Seçtiğiniz kategorilere uygun kombin yok</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 outfit-list justify-center items-center flex-wrap space-x-4 space-y-4 p-4 sm:p-8 lg:p-12">
          {filteredClothes.map((item) => (
            <div key={item.id} className="outfit-card max-w-sm">
              <Link to={`/outfits/${item.id}`}>
                <img className="w-full" src={item.img} alt={item.ust} />
              </Link>

              <div className="p-5">
                <Link to={`/outfits/${item.id}`}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    {item.tarz}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
                  {item.ust}, {item.alt}
                </p>
              </div>
              <div className="outfit-fav" onClick={() => toggleFavorite(item.id)}>
                {favoriteIds.includes(item.id) ? <AiFillHeart /> : <AiOutlineHeart />}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilteredClothesList;

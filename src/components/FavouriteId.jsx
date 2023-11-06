import React from "react";
import clothes from "./OutfitCategory/CategoryData";
 function FavouriteId({ favoriteIds }) {
   // favoriteIds'deki her bir ID'ye karşılık gelen ürünleri depolayacak bir dizi oluşturun
   const favoriteItems = favoriteIds.map((id) => {
     // clothes dizisindeki nesneyi ID'ye göre bulun
     const favoriteItem = clothes.find((item) => item.id === id);

     // Eğer ID'ye karşılık gelen bir ürün bulunamazsa, boş bir nesne döndürün
     return favoriteItem || {};
   });
   return (
     <div>
       <h2>Favori Ürünler</h2>

       {favoriteItems.map((item, index) => (
         <div key={index}>
           <p>Ürün ID: {favoriteIds[index]}</p>
           <img src={item.img}></img>
           <p>Ürün Adı: {item.tarz}</p>
           <p>Ürün Fiyatı: {item.alt}</p>
           
         </div>
       ))}
     </div>
   );
 }

 export default FavouriteId;
import React from 'react'

const Stars = ({star}) => {

    const  rating = Array.from({length:5},(_,i)=>{
        const number = i + .5;

        return star >= i + 1 ? <i class="text-xs md:text-lg fa-solid fa-star"></i>:star >= number ? <i class="fa-solid fa-star-half-stroke text-xs md:text-lg"></i>:<i class="fa-regular fa-star text-xs md:text-lg"></i>
    })


  return (
    <>
    {rating}
    </>
  )
}

export default Stars

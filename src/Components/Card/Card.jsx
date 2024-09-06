import React from 'react'

function Card({imageUrl , Price, kg}) {
  return (
    
    <div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
    <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
      <img class="object-cover items-center" src= {imageUrl} alt="product image" />

    </a>
    <div class="mt-4 px-5 pb-5">
      
      <div class="mt-2 mb-5 flex items-center justify-between">
        <p>
          <span class="text-3xl font-bold text-slate-900">{Price}</span>
        
        </p>  
        <div class="flex items-center">
          <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-md font-semibold">{kg}</span>
        </div>
      </div>
      
      
    </div>
  </div>
  
   )
  
}

export default Card;
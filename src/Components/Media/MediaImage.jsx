import React from 'react'

const MediaImage = () => {
  const images = [
    {id:1 , name:"https://i.pinimg.com/236x/01/21/8b/01218b1a1560ca260596cd19c14fb1d9.jpg"},
    {id:2 , name:"https://i.pinimg.com/736x/68/07/6e/68076e6a34e040275afc7ef113a170b4.jpg"},
    {id:3 , name:"https://i.pinimg.com/236x/75/40/b6/7540b6d9503c380a18543ab1ac1bccab.jpg"},
    {id:4 , name:"https://i.pinimg.com/236x/bf/35/8e/bf358e7abd98a6e98e4b93500906f6e0.jpg"},
    {id:5 , name:"https://i.pinimg.com/236x/94/1c/47/941c47ec58079e09094230ada78fb157.jpg"},
    {id:6 , name:"https://i.pinimg.com/236x/2f/04/cc/2f04cc25c1f63ba7672a117ad07e0225.jpg"},
    {id:7 , name:"https://i.pinimg.com/236x/6e/33/2f/6e332fc235ee77fbff9d74da7eeb66fd.jpg"},
    {id:8 , name:"https://i.pinimg.com/236x/32/6f/90/326f906778e27b59f13ac8f2860104d9.jpg"},
  ]
  return (
    <div className='flex gap-5 flex-wrap'>

        {images.map(image => {
          return(
            <div key={image.id} className='w-[200px] h-[200px] rounded-md'>
              <img src={image.name} className=' w-full h-full rounded-md object-cover'/>
            </div>
          )
        })}
    </div>
  )
}

export default MediaImage

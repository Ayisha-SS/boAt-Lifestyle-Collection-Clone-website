import React from 'react'
import { Link } from 'react-router-dom'

const CollectionsdrpDown = () => {
  return (
    <div className='absolute bg-white outline-5 shadow-lg top-14  dropdown'>
         <div className=' m-auto tracking-widest text-xs font-thin right-0 left-0 w-[90%] flex gap-2 '>
                <div>
                    <Link to="wireless-earbuds" className='w-[16vw] my-5 hover:opacity-30 flex'>
                        <div className='w-[15%]'><img src="src\assets\images\dropdown\dropdown-TWS_100x.png" alt="True wireless earbuds" /></div>
                        True Wireless Earbuds</Link>
                    <Link to="wireless-speaker" className='w-[16vw] my-5 hover:opacity-30 flex'>
                        <div className='w-[15%]'><img src="src\assets\images\dropdown\box-5_100x.webp" alt="Wireless Speakers" /></div>
                        Wireless Speakers</Link>
                    <Link to="party-speaker" className='w-[16vw] my-5 hover:opacity-30 flex'>
                        <div className='w-[15%]'><img src="src\assets\images\dropdown\party speaker.webp" alt="Party Speaker" /></div>
                        Party Speakers</Link>
                    <Link to="car-accessories" className='w-[16vw] my-5 hover:opacity-30 flex'>
                        <div className='w-[15%]'><img src="src\assets\images\dropdown\Car-accessories.png" alt="Car accessories" /></div>
                        Car Accessories</Link>
                </div> 
                <div>
                    <Link to="personalized-product" className='w-[16vw] my-5 hover:opacity-30 flex'>
                        <div className='w-[15%]'><img src="src\assets\images\dropdown\personalized-prdct.png" alt="Boat head" /></div>
                        Personalized Products</Link>
                    <Link to="headphones" className='w-[16vw] my-5 hover:opacity-30 flex'>
                        <div className='w-[15%]'><img src="src\assets\images\dropdown\bassheads-Wired-Headphones.webp" alt="Wired Headphones" /></div>
                        Wired Headphones</Link>
                    <Link to="misfit trimmers" className='w-[16vw] my-5 hover:opacity-30 flex'>
                        <div className='w-[15%]'><img src="src\assets\images\dropdown\MISFIT-shop_100x.png" alt="Misfit Trimmers" /></div>
                        Misfit Trimmers</Link>
                    <Link to="superhero-collections" className='w-[16vw] my-5 hover:opacity-30 flex'>
                        <div className='w-[15%]'><img src="src\assets\images\dropdown\superhero.png" alt="SuperHero Collections" /></div>
                        SuperHero Collections</Link>
                </div> 
                <div>
                    <Link to="neckbands" className='w-[16vw] my-5 hover:opacity-30 flex'>
                        <div className='w-[15%]'><img src="src\assets\images\dropdown\Neckbands.png" alt=" Neckbands" /></div>
                        Neckbands</Link>
                    <Link to="wired-earphones" className='w-[16vw] my-5 hover:opacity-30 flex'>
                        <div className='w-[15%]'><img src="src\assets\images\dropdown\wired headphone.png" alt="True wireless earbuds" /></div>
                        Wired Earphones</Link>
                    <Link to="chargers" className='w-[16vw] my-5 hover:opacity-30 flex'>
                        <div className='w-[15%]'><img src="src\assets\images\dropdown\Charger_100x.png" alt="Chargers" /></div>
                        Chargers</Link>
                    <Link to="trebel for women" className='w-[16vw] my-5 hover:opacity-30 flex'>
                        <div className='w-[15%]'><img src="src\assets\images\dropdown\trebel for women.png" alt="Trebel for Women" /></div>
                        Trebel for Women</Link>
                </div>
                <div>
                    <Link to="smart-watch" className='w-[16vw] my-5 hover:opacity-30 flex'>
                        <div className='w-[15%]'><img src="src\assets\images\dropdown\smartwatches_100x.webp" alt="True wireless earbuds" /></div>
                        Smart Watches</Link>
                    <Link to="Soundbar" className='w-[16vw] my-5 hover:opacity-30 flex'>
                        <div className='w-[15%]'><img src="src\assets\images\dropdown\Soundbar.png" alt="Soundbars" /></div>
                        Soundbars</Link>
                    <Link to="power-banks" className='w-[16vw] my-5 hover:opacity-30 flex'>
                        <div className='w-[15%]'><img src="src\assets\images\dropdown\powerbank_100x.png" alt="Power Banks" /></div>
                        Power Banks</Link>
                    <Link to="limited edition" className='w-[16vw] my-5 hover:opacity-30 flex'>
                        <div className='w-[15%]'><img src="src\assets\images\dropdown\Limited-edition_100x.png" alt="Limited Edition" /></div>
                        Limited Edition</Link>
                </div>
                <div>
                    <Link to="headphones" className='w-[16vw] my-5 hover:opacity-30 flex'>
                        <div className='w-[15%]'><img src="src\assets\images\dropdown\Rectangle271_100x.webp" alt="True wireless earbuds" /></div>
                        Wireless Headphones</Link>
                    <Link to="gaming headphones" className='w-[16vw] my-5 hover:opacity-30 flex'>
                        <div className='w-[15%]'><img src="src\assets\images\dropdown\gamming headphones.png" alt="Gaming Headphones" /></div>
                        Gaming Headphones</Link>
                    <Link to="cables" className='w-[16vw] my-5 hover:opacity-30 flex'>
                        <div className='w-[15%]'><img src="src\assets\images\dropdown\cables.png" alt="Cables" /></div>
                        Cables</Link>
                </div>
        </div> 
    </div>
  )
}

export default CollectionsdrpDown
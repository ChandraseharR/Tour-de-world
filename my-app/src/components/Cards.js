import React from 'react'
import CardItem from './CardItem';
import './Cards.css';
function Cards() {
  return (
    <div  className='cards'>
        <h1>Check out these EPIC Destinations</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                   <CardItem
                   src="images/img-9.jpg"
                   text="Explore the waterfall deep inside the thick jungles"
                   label='Adventure'
                   path='/discover'
                   /> 
                   <CardItem
                   src="images/img-2.jpg"
                   text="Travel through the Islands of Andaman"
                   label='Luxury'
                   path='/discover'
                   /> 
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='images/img-3.jpg'
                    text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                    label='Mystery'
                    path='/discover'
                    />
                    <CardItem
                    src='images/img-4.jpg'
                    text='Experience Football on Top of the Himilayan Mountains'
                    label='Adventure'
                    path='/products'
                    />
                    <CardItem
                    src='images/img-8.jpg'
                    text='Ride through the Sahara Desert on a guided camel tour'
                    label='Adrenaline'
                    path='/sign-up'
                    />
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Cards
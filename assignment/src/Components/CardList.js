import React from 'react';
import CardItem from './CardItem';
function CardList(){
const cards = [
    {
        id : 1,
        title : "Influencing the influencer",
        description : "Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism minister predicts Cancun will draw as many visitors in 2006 as it did two years ago."
    },

    {
        id : 2,
        title : "Popular Uses Of The Internet",
        description : "Although cards can support multiple actions, UI controls, and an overflow menu."
    },

    {
        id : 3,
        title : "Apple iPhone 11 Pro",
        description : "Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic"
    },
    {
         id : 4,
         title : "The Best Answers",
         description : "If you are looking for a new way to promote your business that won’t cost you more money, maybe printing is one of the options you won’t resist."
    },

    {
        id : 5,
        title : "Support",
         description : "According to us blisters are a very common thing and we come across them very often in our daily lives. It is a very common occurrence like cold or fever depending upon your lifestyle."
    },
     {
         id : 6,
        title : "Lifetime Membership",
         description : "Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola, body muscles and holding ones own breath"
     }
]
const cardList = cards.map(item=> <CardItem  key={item.id} item = {item}/>);
  return (<div>
        <h3>Basic Cards</h3>
       <div className='row' style={{display:""}}> 
        {/* {cards.map(item=> <h1>{item.title}</h1>)} */}
        {cardList}
        </div>
    
  </div>);

}
export default CardList;
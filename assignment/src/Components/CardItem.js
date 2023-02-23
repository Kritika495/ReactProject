import React from 'react';
function CardItem({item}){
    return (<div className='col-md-4'>
         
          <div className="card" style={{width: "18rem" , marginTop:"20px"}}>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.description}</p>
  </div>
</div> 

{/* <h1>{item.title}</h1>
<p>{item.description}</p>
<br/> */}

    </div>);
}
export default CardItem;
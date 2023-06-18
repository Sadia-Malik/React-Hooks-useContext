import React from 'react';


import CardProvider from './Component/CardProvider';
import AddCard from './Component/AddCard';
import CardDisplay from './Component/CardDisplay';




function App(){
  return(
   <div className='col-lg-12'>

<div className='p-0 mt-5 d-flex align-items-center justify-content-center flex-column'>

<h1 className='mb-5 text-success'> useContext</h1>

<CardProvider>
 <div >
   <h1>Add Card</h1>
   <AddCard />
 </div>
 <div>
   <h1>Card Display</h1>
   <CardDisplay />
 </div>

</CardProvider>


 
</div>
   </div>
  );
}
export default App;


import React,{ useState} from 'react' 


const DailySales = () => {
  const [sale , setSale] = useState(100);
  const handleSale = () => {
    setSale(1000);
  }
    return ( 
      <div>
        <div className="container">
          <p>{sale}</p>
          <h4 className="center">DailySales</h4>
          <button onClick={handleSale}>Sales</button>
        </div>
    </div>
     );
  }
 
export default DailySales;

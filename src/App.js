
import './App.css';
import Header from './Header.jsx';
import PropertyItem from "./PropertyItem.jsx";
import properties from "./properties.jsx";

const App = () => {

  const propertyItems = properties.map((property,index)=>
    
    <PropertyItem key={index} properties = {property} />
                                       
    );
  
  return ( 
<>
    <Header />

    <div className=" flex justify-center m-9">
    
    <div className="flex flex-wrap justify-center w-full max-w-3xl p-2 m-6">
      {propertyItems}
    </div>
    
    </div>
    </>
  );
  
};

export default App;

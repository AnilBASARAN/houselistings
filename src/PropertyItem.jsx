import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToilet } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';


   


const PropertyItem=(props)=>{

    const {properties}=props;
  
    return(
      <div className="p-2 m-4 border-2 border-black propertyContainer flex flex-col justify-center rounded-lg " >
        <img alt="" className="w-48 h-36 object-cover " src={properties.imageUrl} />
  
  
        <div className="p-2  border-2 flex flex-col justify-center border-stone-400 text-stone-400">
  
          <div className="text-xl text-black ">{properties.address}</div>
      <div>{properties.city},{properties.state}</div>
          
      <div className="flex justify-between">
  
        <div><FontAwesomeIcon icon={faBed} className="mr-1 text-blue-300" />{properties.bathrooms}</div>
      <div> <FontAwesomeIcon icon={faToilet} className="mr-1 text-blue-300" />{properties.bedrooms}</div>
        
      </div>
      
        
        </div>
        
      </div>
      
      
    );
    
  };
  
  export default PropertyItem;
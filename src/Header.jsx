const Header = () => {
    return (
      <footer className="fixed top-0 w-full z-10 flex justify-between text-orange-600 bg-orange-200 p-2">
        <div className="leftSideFooter flex">
          <div><i className="p-1 m-2 fa-solid fa-burger text-2xl text-orange-500"></i></div>
          <button className="p-1 m-2">About</button>
          <button className="p-1 m-2">Store</button>
        </div>

            <div className="text-2xl " >Property Listings</div>

        <div className="rightSideFooter flex">
          <button className="p-1 m-2">Preference</button>
          <button className="p-1 m-2"><i className="fa-solid fa-burger"></i></button>
        </div>
      </footer>
    );
  };
  
  export default Header;
  
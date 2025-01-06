import React,{ useState } from "react";
import "./Home.css";
import HorizontalCardSlider from './HorizontalCardSlider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrumstickBite,faMartiniGlassCitrus,faBurger,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [cuisine, setCuisine] = useState('all');
    const [diet, setDiet] = useState('all');

    const data = [
        { image: 'images/home-img.jpg', title: 'Apple Salad', cuisine: 'American', diet: 'veg' },
        { image: 'images/home-img.jpg', title: 'Chicken Curry', cuisine: 'Indian', diet: 'non-veg' },
        { image: 'images/home-img.jpg', title: 'Pasta', cuisine: 'Italian', diet: 'veg' },
        { image: 'images/home-img.jpg', title: 'Beef Stew', cuisine: 'American', diet: 'non-veg' },
        { image: 'images/home-img.jpg', title: 'Vegetable Sushi', cuisine: 'Japanese', diet: 'veg' },
      ];

    const handleSearch = (event) => setSearchTerm(event.target.value);
    const handleCuisineChange = (event) => setCuisine(event.target.value);
    const handleDietChange = (event) => setDiet(event.target.value);

    const filteredData = data.filter(item => {
    return (
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (cuisine === 'all' || item.cuisine === cuisine) &&
      (diet === 'all' || item.diet === diet)
    );
  });

  return (
    <div className="home-container">
      <div className="left-component">
      <img src="images/logo.png" alt="Logo" className="navbar-logo" />
      <nav className="menu">
            <p><FontAwesomeIcon icon={faDrumstickBite} className="nav-icons" />Find Recipes</p>
            <p><FontAwesomeIcon icon={faMartiniGlassCitrus} className="nav-icons"/>Smart Cuisine</p>
            <p><FontAwesomeIcon icon={faBurger} className="nav-icons"/>Add Your Dish</p>
        </nav>
      </div>
      <div className="right-component">
      <div className="main">
       <div className="intro">
       Grab Your Apron, <br></br>
       Let’s Cook Something Amazing!
       </div>
       <div className="popular-recipies">
        <h3>Popular Recipies</h3>
        <HorizontalCardSlider className="popular-slider" items={data} />
       </div>
       <div className="popular-recipies">
        <h3>Find Recipies</h3>
        <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>


        <select className="select-field" value={cuisine} onChange={handleCuisineChange}>
          <option value="all">All Cuisines</option>
          <option value="American">American</option>
          <option value="Indian">Indian</option>
          <option value="Italian">Italian</option>
          <option value="Japanese">Japanese</option>
        </select>

        <div>
          <label>
            <input
              type="radio"
              name="diet"
              value="all"
              checked={diet === 'all'}
              onChange={handleDietChange}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="diet"
              value="veg"
              checked={diet === 'veg'}
              onChange={handleDietChange}
            />
            Veg
          </label>
          <label className="radio-field">
            <input
              type="radio"
              name="diet"
              value="non-veg"
              checked={diet === 'non-veg'}
              onChange={handleDietChange}
            />
            Non-Veg
          </label>
          <FontAwesomeIcon  icon={faMagnifyingGlass} />
          <input
          className="search-field"
          type="text"
          placeholder={` Search recipie...`}
          value={searchTerm}
          onChange={handleSearch}
        />
        
        </div>
      </div>
    </div>
        <HorizontalCardSlider className="popular-slider" items={filteredData} />
       </div>
      </div>
      </div>
    </div>
  );
};

export default Home;

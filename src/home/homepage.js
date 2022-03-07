import { useEffect, useState } from 'react';
import { db, getCategories } from '../firebase'
import Header from '../header/header';
import Footer from '../footer/footer';
import CategoryDisplay from '../categoryDisplay/categoryDisplay';
import './homepage.css'
import { Outlet } from 'react-router-dom';

const Home = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories(db).then((categories) => importData(categories));

        //mapping function for each imported category
        function importData(category) {
            category.map(extractData)
        };

        //extracts category name and playlists from imported data
        function extractData(importedCategory) {
            setCategories(oldArr => [...oldArr, importedCategory])
        };

    }, []);

    //sets up a category display for each category in DB
    const categoriesToDisplay = categories.map((category, index) => 
        <CategoryDisplay key={index} playlists={category.playlists} name={category.name}/>
    );

    return(
        <div id='pageContainer'>
            <Header />
            <Outlet context={[categories, setCategories]} />
            <Footer />
        </div>
    )
};

export default Home;
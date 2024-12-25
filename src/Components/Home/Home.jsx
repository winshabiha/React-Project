import Banner from "../Banner/Banner";
import Catagories from "../Catagories/Catagories";
import Hero from "../Hero/Hero";
import Jobs from "../Jobs/Jobs";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Catagories></Catagories>
            <Banner></Banner>
            <Jobs></Jobs>
        </div>
    );
};

export default Home;
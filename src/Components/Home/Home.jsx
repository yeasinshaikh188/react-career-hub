import Banner from "../Banner/Banner";
import CategoryList from "../CatergoryList/CategoryList";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const Home = () => {
    return (
        <div>
            <h2>This is home</h2>
           <Banner></Banner>
           <CategoryList></CategoryList>
           <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Home;
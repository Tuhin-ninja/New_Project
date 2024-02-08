import useTitle from "../../hooks/useTitle";
import Banner from "./Banner";
import TopTeachersHome from "./TopTeachersHome";

const Home = () => {
    useTitle('Home')
    return ( 
        <>
            <Banner></Banner>
            <TopTeachersHome></TopTeachersHome>
            
        </>
     );
}
 
export default Home;
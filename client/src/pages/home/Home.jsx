import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | JeepHaven</title>
            </Helmet>
            <h1>This is home</h1>
        </div>
    );
};

export default Home;
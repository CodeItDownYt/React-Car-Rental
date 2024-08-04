import Banner from "./components/Banner";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Plans from "./components/Plans";
import Posts from "./components/Posts";
import Services from "./components/Services";
import Steps from "./components/Steps";
import Types from "./components/Types";

const App = () => {
	return (
		<div className="w-full flex flex-col">
			<Header />
			<Steps />
			<Brands />
			<Types />
			<Banner />
			<Plans />
			<Posts />
			<Services />
			<Footer />
		</div>
	);
};

export default App;

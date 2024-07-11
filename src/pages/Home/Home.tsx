import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import MissionVisionValues from '../../components/MissionVisionValues/MissionVisionValues';
import Clients from '../../components/Clients/Clients';
import Feedback from '../../components/Feedback/Feedback';
import Projects from '../../components/Projects/Projects';
import Footer from '../../components/Footer/Footer';

const Home: React.FC = () => {
	return (
		<>
			<Header />
			<Hero />
			<MissionVisionValues />
			<Clients />
			<Feedback />
			<Projects />
			<Footer />
		</>
	);
};

export default Home;

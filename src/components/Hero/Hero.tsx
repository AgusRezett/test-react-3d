import React from 'react';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
	return (
		<section id="hero" className={styles.hero}>
			<div className="container">
				<h1>Welcome to GreenTech Solutions</h1>
				<p>
					We promote sustainable practices in tech startups with tools and
					resources to adopt green strategies.
				</p>
			</div>
		</section>
	);
};

export default Hero;

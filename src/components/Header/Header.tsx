import React from 'react';
import styles from './Header.module.scss';
import Logo from '../../assets/images/logo.png';

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<img
					src={Logo}
					alt="GreenTech Solutions Logo"
					className={styles.logo}
				/>
				<nav>
					<ul className={styles.navList}>
						<li>
							<a href="#hero">Home</a>
						</li>
						<li>
							<a href="#mission-vision-values">About</a>
						</li>
						<li>
							<a href="#clients">Clients</a>
						</li>
						<li>
							<a href="#feedback">Feedback</a>
						</li>
						<li>
							<a href="#projects">Projects</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;

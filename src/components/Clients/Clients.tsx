import React from 'react';
import styles from './Clients.module.scss';

const Clients: React.FC = () => {
	return (
		<section id="clients" className={styles.clients}>
			<div className="container">
				<h2>Our Clients</h2>
				<div className={styles.clientList}>
					<img src="/assets/images/client1.png" alt="Client 1" />
					<img src="/assets/images/client2.png" alt="Client 2" />
					<img src="/assets/images/client3.png" alt="Client 3" />
					<img src="/assets/images/client4.png" alt="Client 4" />
				</div>
			</div>
		</section>
	);
};

export default Clients;

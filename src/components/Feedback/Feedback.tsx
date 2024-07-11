import React from 'react';
import styles from './Feedback.module.scss';

const Feedback: React.FC = () => {
	return (
		<section id="feedback" className={styles.feedback}>
			<div className="container">
				<h2>What Our Clients Say</h2>
				<div className={styles.testimonials}>
					<div>
						<p>
							"GreenTech Solutions has transformed our approach to
							sustainability."
						</p>
						<p>- Client A</p>
					</div>
					<div>
						<p>
							"Their tools are not only eco-friendly but also highly efficient."
						</p>
						<p>- Client B</p>
					</div>
					<div>
						<p>"Outstanding service and support throughout our journey."</p>
						<p>- Client C</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feedback;

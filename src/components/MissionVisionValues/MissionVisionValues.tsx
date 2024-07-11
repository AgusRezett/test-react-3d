import React from 'react';
import styles from './MissionVisionValues.module.scss';

const MissionVisionValues: React.FC = () => {
	return (
		<section id="mission-vision-values" className={styles.section}>
			<div className="container">
				<h2>Our Mission, Vision & Values</h2>
				<div className={styles.content}>
					<div>
						<h3>Mission</h3>
						<p>
							Promote sustainable and ecological practices in tech startups by
							integrating tools and resources that facilitate the adoption of
							green strategies.
						</p>
					</div>
					<div>
						<h3>Vision</h3>
						<p>
							To be the leading sustainability platform for startups, helping
							them reduce their carbon footprint and implement effective
							eco-friendly practices without compromising operational
							efficiency.
						</p>
					</div>
					<div>
						<h3>Values</h3>
						<ul>
							<li>
								<strong>Sustainability:</strong> Foster the use of eco-friendly
								practices and technologies.
							</li>
							<li>
								<strong>Green Innovation:</strong> Integrate technological
								solutions that support sustainability.
							</li>
							<li>
								<strong>Efficiency:</strong> Provide tools that are not only
								eco-friendly but also resource and cost-efficient.
							</li>
							<li>
								<strong>Collaboration:</strong> Promote collaboration among
								startups to share and adopt best sustainable practices.
							</li>
							<li>
								<strong>Responsibility:</strong> Help startups become more
								environmentally conscious and responsible.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MissionVisionValues;

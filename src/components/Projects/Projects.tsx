import React from 'react';
import styles from './Projects.module.scss';

const Projects: React.FC = () => {
	return (
		<section id="projects" className={styles.projects}>
			<div className="container">
				<h2>Our Projects</h2>
				<div className={styles.projectList}>
					<div>
						<h3>Project 1</h3>
						<p>Description of Project 1.</p>
					</div>
					<div>
						<h3>Project 2</h3>
						<p>Description of Project 2.</p>
					</div>
					<div>
						<h3>Project 3</h3>
						<p>Description of Project 3.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;

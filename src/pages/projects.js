import React from 'react';

function Projects() {
	return (
		<section aria-label="our products">
				<h2>Learn more about the our project</h2>
				<div className="row projects__list">
					<div className="project__item">
						<img src="https://picsum.photos/id/160/350/350" alt="" className="proj-img" />
						<h3>monetization</h3>
						<span className="another-link">Read More</span>
					</div>

					<div className="project__item">
						<img src="https://picsum.photos/id/174/350/350" className="proj-img" />
						<h3>freemium</h3>
						<span className="another-link">Read More</span>
					</div>

					<div className="project__item">
						<img src="https://picsum.photos/id/180/350/350" className="proj-img" />
						<h3>gen-z network</h3>
						<span className="another-link">Read More</span>
					</div>

					<div className="project__item">
						<img src="https://picsum.photos/id/20/350/350" alt="" className="proj-img" />
						<h3>infographic</h3>
						<span className="another-link">Read More</span>
					</div>

					<div className="project__item">
						<img
							src="https://picsum.photos/id/2/350/350"
							alt="network effects"
							className="proj-img"
						/>
						<h3>network effects</h3>
						<span className="another-link">Read More</span>
					</div>

					<div className="project__item" role="presentation" tabIndex="0">
						<img
							src="https://picsum.photos/id/201/350/350"
							alt="market first"
							className="proj-img"
						/>
						<h3>market first</h3>
						<span className="another-link">Read More</span>
					</div>

					<div className="project__item" role="presentation" tabIndex="0">
						<img
							src="https://picsum.photos/id/221/350/350"
							alt="creative partner"
							className="proj-img"
						/>
						<h3>creative partner</h3>
						<span className="another-link">Read More</span>
					</div>

					<div className="project__item" role="presentation" tabIndex="0">
						<img src="https://picsum.photos/id/223/350/350" className="proj-img" />
						<h3>holy grail incubator</h3>
						<span className="another-link">Read More</span>
					</div>

					<div className="project__item" role="presentation" tabIndex="0">
						<img src="https://picsum.photos/id/274/350/350" alt="mailing" className="proj-img" />
						<h3>mailing</h3>
						<span className="another-link">Read More</span>
					</div>
				</div>
			</section>
	);
}

export default Projects;

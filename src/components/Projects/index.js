import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'The Unstoppable Hero Database',
			description:
				'This application allows the user to Search for a super hero to see all the information related to that superhero (names, aliases, etc)',
			image: 'living-real-image.png',
			technologies: [
				'HTML/CSS', 'JavaScript'
			],
			github: 'https://github.com/ClaudioF9/The-Unstoppable-Hero-Database',
			deployed: 'https://claudiof9.github.io/The-Unstoppable-Hero-Database/',
		},
		{
			name: 'Work-Day-Scheduler',
			description:
				'This is a calendar application which allow users to save events for each hour of the day.',
			image: 'auto-tracker-image.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/Imran-92/Work-Day-Scheduler',
			deployed: 'https://imran-92.github.io/Work-Day-Scheduler/',
		},
		{
			name: 'Weather Dashboard',
			description:
				'A weather dashboard that shows current weather and five-day weather forecast for any city.',
			image: 'flash-beats-image.gif',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/Imran-92/Weather-Dashboard-App',
			deployed: 'https://imran-92.github.io/Weather-Dashboard-App/',
		},
		{
			name: 'Football News',
			description:
				'This is a basic landing page based on HTML5 and CSS3.',
			image: 'budget-tracker-image.png',
			technologies: [
				'HTML/CSS',
			],
			github: 'https://github.com/Imran-92/Football-Landing-Page',
		},
		{
			name: 'Horiseon',
			description:
				'A basic landing page the code has refactored to follow clean html structure.',
			image: 'weather-dashboard-image.png',
			technologies: ['HTML/CSS'],
			github: 'https://github.com/Imran-92/Horiseon-Code-Refactor',
		},
		{
			name: 'Jakes Eatery',
			description:
				'Another Basic HTML and CSS based web page.',
			image: 'password-generator-image.png',
			technologies: [
				'HTML',
				'CSS'
			],
			github: 'https://github.com/Imran-92/Jakes-Eatery',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Projects</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;

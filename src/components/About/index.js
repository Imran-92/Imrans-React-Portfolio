import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/AvatarImg.png')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
				Hi there my name is Imran and i am a full time Graphic designer and Web developer. <br/>As a web developer, I am responsible for creating and maintaining websites that are user-friendly, visually appealing, and optimized for performance. I have a strong foundation in web development languages such as HTML, CSS, and JavaScript, as well as experience working with various frameworks and libraries such as React, Angular, and jQuery.

				My goal as a web developer is to create websites that not only meet the needs of my clients but also provide a positive user experience for their visitors. I have experience working with content management systems such as WordPress, Drupal, and Joomla, and I am skilled in creating custom solutions to meet the specific needs of each project.

				In addition to my technical skills, I am also experienced in working collaboratively with other developers, designers, and project managers. I am comfortable with version control systems such as Git and have experience using tools like GitHub to manage code changes and collaborate on projects.

				Overall, as a web developer, I am dedicated to creating websites that are functional, visually appealing, and optimized for performance. I am constantly learning and staying up-to-date with the latest web development technologies and trends to ensure that I am providing the best possible solutions to my clients.
					
				</p>
			</div>
		</section>
	);
}

export default About;

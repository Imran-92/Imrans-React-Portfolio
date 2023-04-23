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
				As an experienced Graphic Designer I am passionate about creating impactful designs that communicate complex ideas
and support business objectives. With several years of experience in the industry, I have developed a strong foundation in
design principles, typography, branding, and web design.
With a solid foundation in HTML, CSS, and JavaScript, I am constantly learning and adapting to new technologies and
techniques to enhance my skills. My approach to design is rooted in collaboration and communication.
I am a creative problem-solver who is always looking for new and innovative ways to approach design challenges.
My attention to detail and ability to collaborate effectively with team members allow me to deliver high-quality work within
tight deadlines. I stay up-to-date with the latest design trends and technologies, and I am always seeking opportunities to
expand my skillset and improve my craft.
					
				</p>
			</div>
		</section>
	);
}

export default About;

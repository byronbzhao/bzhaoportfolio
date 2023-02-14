import React from 'react';
import { motion } from 'framer-motion';
import {
	Container,
	Divider,
	LeftSide,
	RightSide,
	Wrapper,
} from './About.styles';

const About = () => {
	return (
		<Wrapper name='about'>
			<Container>
				<LeftSide>
					<motion.div
						whileInView={{ x: [-100, 0], opacity: [0, 1] }}
						transition={{ duration: 1 }}
					>
						<h1>About Me</h1>
						<p>
							My name is Byron! <br />
							Age 27 <br />
							Favourite animal is the red panda
							<br />
							Likes to hike
							<br />
							Loves to travel
						</p>
					</motion.div>
				</LeftSide>
				<Divider />
				<RightSide>
					<motion.div
						whileInView={{ x: [100, 0], opacity: [0, 1] }}
						transition={{ duration: 2 }}
					>
						<p>
							I am a self taught front end developer that specializes in
							building modern, responsive web applications using HTML, CSS,
							Javascript/Typescript, and ReactJS. I love to further hone my skills and
							learning new ways to optimize for better and cleaner code!
						</p>{' '}
						<button>
							<a href='https://drive.google.com/file/d/1bR-J2dx5FvzuolFCWynQTcYuUl4n1x51/view?usp=sharing' target='_blank' rel='noreferrer'>Resume</a>
						</button>
					</motion.div>
				</RightSide>
			</Container>
		</Wrapper>
	);
};

export default About;

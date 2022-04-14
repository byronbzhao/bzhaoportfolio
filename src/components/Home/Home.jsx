import React from 'react';

import { HiArrowNarrowRight } from 'react-icons/hi';
import { Button, Container, Wrapper } from './Home.styles';
import { Link } from 'react-scroll/modules';
import { motion } from 'framer-motion';

const Home = () => {
	return (
		<Wrapper name='home'>
			{/* CONTAINER */}
			<Container>
				<motion.div
					whileInView={{ y: [-100, 0], opacity: [0, 1] }}
					transition={{ duration: 1 }}
				>
					<p>Hi, my name is</p>
					<h1>
						<span>B</span>YRON ZHAO{' '}
					</h1>
					<h2>I am a front end developer</h2>
					<p>
						Ready to build modern, exceptional, responsive web applications!
					</p>
					<Button>
						<Link to='works' smooth={true} duration={500}>
							Projects
						</Link>
						<HiArrowNarrowRight />
					</Button>
				</motion.div>
			</Container>
		</Wrapper>
	);
};

export default Home;

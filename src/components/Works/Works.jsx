import React from 'react';
import { Container, WorkContainer, Wrapper } from './Works.styles';

import projects from '../../data/WorksInfo';

import WorkItem from './WorkItem/WorkItem';
import { motion } from 'framer-motion';

const Works = () => {
	return (
		<Wrapper name='works'>
			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 1 }}
			>
				<Container>
					<h1>Check out my <span>projects!</span></h1>
					<WorkContainer>
						{projects.map((project) => (
							<WorkItem
								name={project.name}
								desc={project.desc}
								img={project.img}
								liveServer={project.liveServer}
								code={project.code}
								skills={project.skills}
							/>
						))}
					</WorkContainer>
				</Container>
			</motion.div>
		</Wrapper>
	);
};

export default Works;

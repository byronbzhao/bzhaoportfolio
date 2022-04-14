import React from 'react';
import {
	Container,
	LearningContainer,
	SkillsContainer,
	Wrapper,
} from './Skills.styles';

import { motion } from 'framer-motion';

import CSS from '../../assets/img/css.png';
import Github from '../../assets/img/github.png';
import HTML from '../../assets/img/html.png';
import Javascript from '../../assets/img/javascript.png';
import ReactJS from '../../assets/img/react.png';
import Typescript from '../../assets/img/Typescript.png'
import Git from '../../assets/img/git.png'
import Mongo from '../../assets/img/mongo.png'
import Node from '../../assets/img/node.png'

const Skills = () => {
	const skills = [HTML, CSS, Javascript, ReactJS, Github];
	const futureSkills = [Typescript, Git, Mongo, Node]

	return (
		<Wrapper name='skills'>
			<Container>
				<SkillsContainer>
				<motion.div
					whileInView={{ y: [-100, 0], opacity: [0, 1] }}
					transition={{ duration: 1 }}
				>
					<h1>Experienced In</h1>
					<div>
						{skills.map((skill) => (
							<img src={skill} alt={skill} key={skill.length + 1} />
						))}
					</div>
					</motion.div>
				</SkillsContainer>
				<LearningContainer>
				<motion.div
					whileInView={{ y: [100, 0], opacity: [0, 1] }}
					transition={{ duration: 1 }}
				>
					<h2>Currently Learning</h2>
					<div>
						{futureSkills.map((skill) => (
							<img src={skill} alt='skill' key={skill.length + 1} />
						))}
					</div>
					</motion.div>
				</LearningContainer>
				/
			</Container>
		</Wrapper>
	);
};

export default Skills;

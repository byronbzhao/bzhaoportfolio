import React from 'react';
import { Container, Overlay, Wrapper, InfoContainer } from './WorkItem.styles';

const WorkItem = ({ name, desc, img, code, liveServer, skills }) => {
	return (
		<Wrapper>
			<Container>
				<img src={img} alt={name} />
				<Overlay>
					<h2>{name}</h2>
					<div>
						<a href={liveServer} target='_blank' rel='noreferrer'>
							Live Server
						</a>
						<a href={code} target='_blank' rel='noreferrer'>
							Code
						</a>
					</div>
					{/* <p>{desc}</p> */}
					<InfoContainer>
						{skills.map((skill, i) => (
							<p>{skill}</p>
						))}
					</InfoContainer>
				</Overlay>
			</Container>
		</Wrapper>
	);
};

export default WorkItem;

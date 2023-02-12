import styled from 'styled-components';

export const Wrapper = styled.div`
	background-color: rgba(9, 26, 47, 0.9);
	padding: 3rem 0 3rem 0;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1 {
		margin-top: 1rem;
		color: #ffffff;
		font-size: 5rem;
	}
	span {
		color: rgb(219, 39, 119);
	}

	@media screen and (max-width: 950px) {
		width: 100%;
	}
`;

export const WorkContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	grid-gap: 1rem;
	margin-top: 20px;

	@media screen and (max-width: 1800px) {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	@media screen and (max-width: 1400px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	@media screen and (max-width: 950px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

import travelApp from '../assets/projectImg/travelapp.png';
import movieApp from '../assets/projectImg/movieapp.png';
import chatroomApp from '../assets/projectImg/chatroom.png';
import calculatorApp from '../assets/projectImg/calculator.png';
import wordleCloneApp from '../assets/projectImg/wordleclone.png';
import meTubeApp from '../assets/projectImg/metubeapp.PNG';
import cryptoApp from '../assets/projectImg/cryptoapp.PNG';
import notesApp from '../assets/projectImg/notesapp.PNG';

const projects = [
	{
		id: 1,
		name: 'CRUD Notes App',
		desc: 'Recreating the Netflix website using ReactJS, styled with Styled Components as well as Firebase to store login information',
		img: notesApp,
		code: 'https://github.com/byronbzhao/CRUD-notes-app-ts',
		liveServer: 'https://takenoteshere.netlify.app/',
		skills: ['ReactJS', 'Bootstrap', 'Typescript'],
	},
	{
		id: 2,
		name: 'Travel Application Website',
		desc: 'An application that uses Google Map API for users to search for nearby restaurants, hotels, and attractions!',
		img: travelApp,
		code: 'https://github.com/byronbzhao',
		liveServer: 'https://travelguidehelp.netlify.app/',
		skills: ['ReactJS', 'Styled Components', 'Google Search API'],
	},
	{
		id: 3,
		name: 'Movie Database',
		desc: `Using the Movie Database API, created an application where you can search the top movies, description, it's respective cast, budget and revenue `,
		img: movieApp,
		code: 'https://github.com/byronbzhao',
		liveServer: 'https://moviesinfolink.netlify.app/',
		skills: ['ReactJS', 'API Fetching'],
	},
	{
		id: 4,
		name: 'Chat Room App',
		desc: 'By using Firebase and Chatengine.io API, created a messaging application where users can log in using their Google or Facebook accounts',
		img: chatroomApp,
		code: 'https://github.com/byronbzhao/chatroom',
		liveServer: 'https://byronchatroom.netlify.app/',
		skills: ['ReactJS', 'Firebase', 'API Fetching'],
	},
	{
		id: 5,
		name: 'Calculator',
		desc: 'Created a good looking, functional calculator ',
		img: calculatorApp,
		code: 'https://github.com/byronbzhao/calculator',
		liveServer: 'https://calc4you.netlify.app/',
		skills: ['HTML', 'CSS', 'JS'],
	},
	{
		id: 6,
		name: 'Wordle Clone',
		desc: 'Recreated the popular game Wordle with HTML, CSS, Javascript',
		img: wordleCloneApp,
		code: 'https://github.com/byronbzhao/wordle-clone',
		liveServer: 'https://wordle-clone-bz.netlify.app/',
		skills: ['HTML', 'CSS', 'JS'],
	},
	{
		id: 7,
		name: 'MeTube',
		desc: '',
		img: meTubeApp,
		code: 'https://github.com/byronbzhao/youtube-player',
		liveServer: 'https://metubeapp.netlify.app/',
		skills: ['ReactJS', 'AXIOS', 'MUI'],
	},
	{
		id: 8,
		name: 'Cryptocurrency App',
		desc: '',
		img: cryptoApp,
		code: 'https://github.com/byronbzhao/cryptoinfo-app',
		liveServer: 'https://mycryptoinfo.netlify.app/',
		skills: ['ReactJS', 'TailwindCSS', 'JS'],
	},
];

export default projects;

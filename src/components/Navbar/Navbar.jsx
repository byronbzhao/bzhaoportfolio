import React, { useState } from 'react';

import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import {
	Wrapper,
	Logo,
	List,
	MobileMenu,
	HamburgerMenu,
	Socials,
} from './Navbar.styles';

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleClick = () => setNav(!nav);

	return (
		<Wrapper>
			<Logo>BYRON</Logo>
			{/* MENU */}
			<List>
				<li>
					<Link to='home' smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li>
					<Link to='about' smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li>
					<Link to='skills' smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li>
					<Link to='works' smooth={true} duration={500}>
						Projects
					</Link>
				</li>
				<li>
					<Link to='contact' smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</List>

			{/* HAMBURGER */}
			<HamburgerMenu onClick={handleClick}>
				<FaBars />
			</HamburgerMenu>

			{/* MOBILE MENU */}
			{!nav ? (
				<MobileMenu>
					<li>
						<Link onClick={handleClick} to='home' smooth={true} duration={500}>
							Home
						</Link>
					</li>
					<li>
						<Link onClick={handleClick} to='about' smooth={true} duration={500}>
							About
						</Link>
					</li>
					<li>
						<Link onClick={handleClick} to='skills' smooth={true} duration={500}>
							Skills
						</Link>
					</li>
					<li>
						<Link onClick={handleClick} to='works' smooth={true} duration={500}>
							Projects
						</Link>
					</li>
					<li>
						<Link onClick={handleClick} to='contact' smooth={true} duration={500}>
							Contact
						</Link>
					</li>
				</MobileMenu>
			) : null}

			{/* SOCIAL */}
			<Socials>
				<ul>
					<li>
						<a href='https://www.linkedin.com/in/byronbzhao/' target='_blank' rel='noreferrer'>
							<p>LinkedIn</p>
							<FaLinkedin size={30} />
						</a>
					</li>
					<li>
						<a href='https://github.com/byronbzhao' target='_blank' rel='noreferrer'>
							<p>Github</p>
							<FaGithub size={30} />
						</a>
					</li>
					<li>
						<a href='mailto:byronzhao139@gmail.com' target='_blank' rel='noreferrer'>
							<p>Email</p>
							<HiOutlineMail size={30} />
						</a>
					</li>
					<li>
						<a href='https://drive.google.com/file/d/1dc0Ruihutrx3mGwbblhj-9x2wLzIY1ag/view?usp=sharing' target='_blank' rel='noreferrer'>
							<p>Resume</p>
							<BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</Socials>
		</Wrapper>
	);
};

export default Navbar;

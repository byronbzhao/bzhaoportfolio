import React from 'react';
import { Socials, Wrapper } from './Contact.styles';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';


const Contact = () => {
	return (
		<Wrapper name='contact'>
			<form
				method='POST'
				action='https://getform.io/f/d96f6a47-fee8-4b3c-8d67-ac7c22ea5063'
			>
				<motion.div
					whileInView={{ y: [100, 0], opacity: [0, 1] }}
					transition={{ duration: 1 }}
				>
					<div>
						<p>Contact Me!</p>
						<Socials>
							<a href="https://github.com/byronbzhao" target='_blank' rel='noreferrer'>
								<FaGithub />
							</a>
							<a href="https://www.linkedin.com/in/byronbzhao/" target='_blank' rel='noreferrer'>
								<FaLinkedin />
							</a>
						</Socials>
					</div>
					<input type='text' placeholder='Name' name='name' />
					<input type='email' placeholder='Email' name='email' />
					<textarea name='message' rows='10' placeholder='Message' />
					<button>Send</button>
				</motion.div>
			</form>
		</Wrapper>
	);
};

export default Contact;

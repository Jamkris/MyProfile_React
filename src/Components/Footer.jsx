import React, { useState } from 'react';

const Footer = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setmessage] = useState('');

	const onChnageName = (e) => {
		setName(e.target.value);
		console.log(name);
	};

	const onChnageEmail = (e) => {
		setEmail(e.target.value);
	};

	const onChnageMessage = (e) => {
		setmessage(e.target.value);
	};

	const handleSubmit = () => {
		console.log('aslkfjalsjfl');
		alert('Sent Complete');
		setName('');
		setEmail('');
		setmessage('');
	};

	return (
		<footer id='footer'>
			<div class='inner'>
				<section id='Send_section'>
					<h2 id='Sendh2'>Send Email</h2>
					<form
						method='post'
						action='https://script.google.com/macros/s/AKfycbzUpu78sMltlNFuBHw-KXdpN5dP6A11vNXlitCfVrfTVPo-Kz98wPZ2WuNc-E8BZoPa/exec'
						target='iframe1'
						onSubmit={handleSubmit}
					>
						<div class='fields'>
							<div class='field half'>
								<input
									type='text'
									name='name'
									id='name'
									placeholder='Name'
									onChange={onChnageName}
									value={name}
								/>
							</div>
							<div class='field half'>
								<input
									type='email'
									name='email'
									id='email'
									placeholder='Email'
									onChange={onChnageEmail}
									value={email}
								/>
							</div>
							<div class='field'>
								<textarea
									name='message'
									id='message'
									placeholder='Message'
									onChange={onChnageMessage}
									value={message}
								></textarea>
							</div>
						</div>
						<ul class='actions'>
							<li>
								<button
									type='submit'
									value='Send'
									class='primary'
								>
									Send
								</button>
							</li>
						</ul>
					</form>
				</section>
				<script
					data-cfasync='false'
					src='form-submission-handler.js'
				></script>
				<iframe id='iframe1' name='iframe1' title="none"></iframe>
			</div>
		</footer>
	);
};

export default Footer;

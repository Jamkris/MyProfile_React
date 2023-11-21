import React from 'react';
import Source from '../Components/Source';
import Header from '../Components/Header';
import Title from '../Components/Title';
import Footer from '../Components/Footer';

const Profile = () => {
	return (
		<div id='wrapper'>
			<Header
				TITLE={'Profile'}
				DESC={'Introducing Myself'}
				LINK={'/profile'}
			/>

			<div id='main'>
				<div class='inner'>
					<Title TITLE={'Introducing Myself'} />
					
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Profile;

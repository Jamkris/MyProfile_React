import React from 'react';
import Source from '../Components/Source';
import Header from '../Components/Header';
import Title from '../Components/Title';
import Footer from '../Components/Footer';

const Project = () => {
	return (
		<div id='wrapper'>
			<Header
				TITLE={'Project'}
				DESC={'Project Page'}
				LINK={'/project'}
			/>

			<div id='main'>
				<div class='inner'>
					<Title TITLE={'Project I Did'} />
					<section class='tiles'>
						<Source
							IMG={'./images/BSSM (5).jpg'}
							LINK={'Preparing.html'}
							TITLE={'Preparing'}
							DESC={'Preparing'}
						/>
					</section>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Project;

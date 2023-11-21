import React from 'react';
import Source from '../Components/Source';
import Header from '../Components/Header';
import Title from '../Components/Title';
import Footer from '../Components/Footer';

const Learn = () => {
	return (
		<div id='wrapper'>
			<Header
				TITLE={'Learn'}
				DESC={"About What I've Learned"}
				LINK={'/learn'}
			/>

			<div id='main'>
				<div class='inner'>
					<Title TITLE={"About What I've Learned"} />
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

export default Learn;

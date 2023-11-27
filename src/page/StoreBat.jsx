import React from 'react';
import Source from '../Components/Source';
import Header from '../Components/Header';
import Title from '../Components/Title';
import Footer from '../Components/Footer';

const StoreBat = () => {
	return (
		<div id='wrapper'>
			<Header
				TITLE={'Game'}
				DESC={"Enjoy with your friends!"}
				LINK={'/storebat'}
			/>

			<div id='main'>
				<div class='inner'>
					<Title TITLE={"Enjoy with your friends!"} />
					<section class='tiles'>
						<Source
							IMG={'../images/BSSM (5).jpg'}
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

export default StoreBat;

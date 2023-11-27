import React from 'react';
import Source from '../Components/Source';
import Header from '../Components/Header';
import Title from '../Components/Title';
import Footer from '../Components/Footer';

const Home = () => {
	return (
		<div id='wrapper'>
			<Header
				TITLE={'Main Page'}
				DESC={'This is My HomePage Welcome to my homepage'}
				LINK={'/'}
			/>

			<div id='main'>
				<div class='inner'>
					<Title
						TITLE={'This is My HomePage'}
						DESC={'Welcome to my homepage'}
					/>
					<section class='tiles'>
						<Source
							IMG={'./images/MyPhoto.jpg'}
							LINK={'/Profile'}
							TITLE={'Profile'}
							DESC={'This is my Profile page'}
						/>

						<Source
							IMG={'./images/drive.png'}
							LINK={'_blank'}
							TITLE={'Drive'}
							DESC={'This is my GoogleDrive page'}
						/>

						<Source
							IMG={'./images/MyBox.png'}
							LINK={'https://naver.me/FkdRjXst'}
							TITLE={'My Box'}
							DESC={'This is my NaverMyBox page'}
						/>

						<Source
							IMG={'./images/Busan_SW_Meister.jpg'}
							LINK={'https://school.busanedu.net/bssm-h/'}
							TITLE={'BSSM'}
							DESC={'Busan Software Meister High School'}
						/>

						<Source
							IMG={'./images/BSSM_Info.png'}
							LINK={'https://bssm.kro.kr/'}
							TITLE={'BSSM Infor'}
							DESC={'Student Information'}
						/>

						<Source
							IMG={'./images/BumaWiki.jpg'}
							LINK={'http://bumawiki.kro.kr/'}
							TITLE={'BumaWiki'}
							DESC={'BumaWiki'}
						/>

						<Source
							IMG={'./images/BSSM_PortFolio.jpg'}
							LINK={'https://portfolio.bssm.io/'}
							TITLE={'BSSM PortFolio'}
							DESC={'Busan SW Meeister High School PortFolio'}
						/>

						<Source
							IMG={'./images/Petition.png'}
							LINK={'https://petition.bamdoliro.com'}
							TITLE={'Student Pentition'}
							DESC={'Students are free to petition the school.'}
						/>

						<Source
							IMG={'./images/BSSM (2).jpg'}
							LINK={'Preparing.html'}
							TITLE={'Preparing'}
							DESC={'Preparing'}
						/>

						<Source
							IMG={'./images/BSSM (3).jpg'}
							LINK={'Preparing.html'}
							TITLE={'Preparing'}
							DESC={'Preparing'}
						/>

						<Source
							IMG={'./images/BSSM (4).jpg'}
							LINK={'Preparing.html'}
							TITLE={'Preparing'}
							DESC={'Preparing'}
						/>

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

export default Home;

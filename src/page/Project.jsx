import React from 'react';
import Source from '../Components/Source';
import Header from '../Components/Header';
import Title from '../Components/Title';
import Footer from '../Components/Footer';

const Project = () => {
	return (
		<div id='wrapper'>
			<Header TITLE={'Project'} DESC={'Project Page'} LINK={'/project'} />

			<div id='main'>
				<div class='inner'>
					<Title TITLE={'Project I Did'} />
					<section class='tiles'>
						<Source
							IMG={'../images/아이콘.jpg'}
							LINK={'https://github.com/Jamkris/MyProfile_React'}
							TITLE={'My Profile Page!'}
							DESC={"It's this page!"}
						/>
						<Source
							IMG={'../images/ChatApp_Project.jpg'}
							LINK={'https://github.com/Jamkris/Next_ChatApp'}
							TITLE={'ChatApp'}
							DESC={'Chat app made for fun'}
						/>
						<Source
							IMG={'../images/Blog_Project.jpg'}
							LINK={'https://github.com/Jamkris/Next_ChatApp'}
							TITLE={'MyBlog'}
							DESC={'Make Myself Notion blog'}
						/>
					</section>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Project;

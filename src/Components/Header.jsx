import React, { useState } from 'react';
import Menubar from './Menubar';

const Header = ({ TITLE, DESC, LINK }) => {
	const [isOpenMenubar, setIsOpenMenubar] = useState(false);
	const handleMenubarOpen = () => {
		setIsOpenMenubar(!isOpenMenubar);
	};

	const closeMenubar = (State) => {
		setIsOpenMenubar(State);
	};
	return (
		<header id='header' className='Heder_Container'>
			<div class='inner'>
				<a href={LINK} class='logo'>
					<span class='symbol'>
						<img src='images/아이콘.jpg' alt='' />
					</span>
					<span class='title'>{TITLE}</span>
				</a>

				<nav>
					<ul>
						<li>
							<a href='#menu' onClick={handleMenubarOpen}></a>
						</li>
					</ul>
				</nav>
			</div>
			{isOpenMenubar ? (
				<div className='MenubarBackground'>
					<Menubar closeMenubar={closeMenubar} />
				</div>
			) : null}
		</header>
	);
};

export default Header;

import React from 'react';
import './CSS/Menubar.css';

const Menubar = ({ closeMenubar }) => {
	const closeMenubarState = () => {
		closeMenubar(false);
	};
	return (
		<div
			className={`Menubar_Container ${
				closeMenubar ? 'fadeIn' : 'fadeOut'
			}`}
		>
			<a href='#menu'>
				<img
					src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 8px%3B stroke: %23585858%3B %7D%3C/style%3E%3Cline x1='15' y1='15' x2='85' y2='85' /%3E%3Cline x1='85' y1='15' x2='15' y2='85' /%3E%3C/svg%3E"
					width={50}
					height={50}
					className='CloseButton'
					onClick={closeMenubarState}
				/>
			</a>
			<div className='Menubar_Main'>
				<h2 id='Menuh2'>Menu</h2>
				<ul className='Menu_Lists'>
					<li style={{ borderBottom: '1px solid #717171' }}>
						<a href='/'>Home</a>
					</li>
					<li style={{ borderBottom: '1px solid #717171' }}>
						<a href='/profile'>Profile</a>
					</li>
					<li style={{ borderBottom: '1px solid #717171' }}>
						<a href='/project'>Project</a>
					</li>
					{/* <li style={{borderBottom: '1px solid #717171'}}>
						<a href='/learn'>Learn</a>
					</li> */}
				</ul>
			</div>
		</div>
	);
};

export default Menubar;

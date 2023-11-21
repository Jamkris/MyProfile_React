import React from 'react';

const Title = ({TITLE, DESC}) => {
	return (
		<header>
			<h1 id='This_is_my_page'>
				{TITLE}
				<br />
				<a href='#' class='None_border'>
					{DESC}
				</a>
			</h1>
		</header>
	);
};

export default Title;

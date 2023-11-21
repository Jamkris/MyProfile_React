import React from 'react';

const Source = ({IMG, LINK, TITLE, DESC}) => {
	return (
		<article class='style1'>
			<span class='image'>
				<img
					src={IMG}
					id='Main_img'
				/>
			</span>
			<a href={LINK}>
				<h2>{TITLE}</h2>
				<div class='content'>
					<p>{DESC}</p>
				</div>
			</a>
		</article>
	);
};

export default Source;

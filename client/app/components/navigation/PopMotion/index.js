import React from 'react'
import { Link } from 'react-router'

export default () => (
  <ul>
    <li><Link to='/pop-motion/slide'>Slide</Link></li>
	<li><Link to='/pop-motion/chart'>Chart</Link></li>
	<li>
		<ul>
			<li><a href='/pop-motion/chart/1'>Chart 1</a></li>
			<li><a href='/pop-motion/chart/2'>Chart 2</a></li>
			<li><a href='/pop-motion/chart/3'>Chart 3</a></li>
			<li><a href='/pop-motion/chart/4'>Chart 4</a></li>
		</ul>
	</li>
  </ul>
)

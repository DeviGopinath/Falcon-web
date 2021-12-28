import '../../../style/SideNav.css';

const SideNav = () => {
	return (
		<div className='sidebox'>
			<ul className='list'>
				<li className='link'>
					<a>Base Data </a>
				</li>
				<li className='link'>
					<a>IBU Summary </a>
				</li>
				<li className='link'>
					<a>Projects </a>
				</li>
				<li className='link'>
					<a>People </a>
				</li>
			</ul>
		</div>
	);
};

export default SideNav;

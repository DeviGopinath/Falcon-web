import BaseData from '../views/BaseData';
import SideNav from '../views/navigation/SideNav';
import TopNav from '../views/navigation/TopNav';

const DataContainer = ({setAuth}) => {
	return (
		<div>
			<TopNav setauth={setAuth}/>
			<div className='row'>
				<div className='col-md-2'>
					<SideNav />
				</div>
				<div className='col-md-10'>
					<BaseData />
				</div>
			</div>
		</div>
	);
};

export default DataContainer;

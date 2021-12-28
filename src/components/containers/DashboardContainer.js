import DashBoards from '../../components/views/DashBoards';
import SideNav from '../views/navigation/SideNav';
import TopNav from '../views/navigation/TopNav';

const DashBoardContainer = ({setAuth}) => {
	return (
		<div>
			<TopNav setauth={setAuth}/>
			<div className='row'>
				<div className='col-md-2'>
					<SideNav />
				</div>
				<div className='col-md-10 mt-5 pt-5'>
					<DashBoards />
				</div>
			</div>
		</div>
	);
};

export default DashBoardContainer;

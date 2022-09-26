import React from 'react';
import { Container } from 'react-bootstrap';

import SBreadCrumb from '../../components/Breadcrumb';

function Dashboard() {
	return (
		<Container className='mt-3'>
			<SBreadCrumb />
			<h1>Hello Dashboard</h1>
		</Container>
	);
}

export default Dashboard;

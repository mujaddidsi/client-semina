import React from 'react';
import { Navigate } from 'react-router-dom';
import { Container, Nav, Navbar, Breadcrumb, Table } from 'react-bootstrap';

import SButton from '../../components/Button';

function Dashboard() {
	const token = localStorage.getItem('token');

	if (!token) return <Navigate to='/signin' replace={true} />;

	return (
		<>
			<Navbar bg='dark' variant='dark'>
				<Container>
					<Navbar.Brand href='#home'>Semina</Navbar.Brand>
					<Nav className='me-auto'>
						<Nav.Link href='#home'>Home</Nav.Link>
						<Nav.Link href='#features'>Categories</Nav.Link>
						<Nav.Link href='#pricing'>Talents</Nav.Link>
					</Nav>
				</Container>
			</Navbar>

			<Container>
				<Breadcrumb className='mt-3'>
					<Breadcrumb.Item active>Home</Breadcrumb.Item>
				</Breadcrumb>

				<SButton>Tambah</SButton>

				<Table className='mt-3' striped bordered hover variant='dark'>
					<thead>
						<tr>
							<th>#</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Username</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<td>3</td>
							<td colSpan={2}>Larry the Bird</td>
							<td>@twitter</td>
						</tr>
					</tbody>
				</Table>
			</Container>
		</>
	);
}

export default Dashboard;

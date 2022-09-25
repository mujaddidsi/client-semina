import React, { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Container, Table, Spinner } from 'react-bootstrap';
import axios from 'axios';

import SButton from '../../components/Button';
import SNavbar from '../../components/Navbar';
import SBreadCrumb from '../../components/Breadcrumb';
import { config } from '../../configs';

function PageCategories() {
	const navigate = useNavigate();
	const token = localStorage.getItem('token');

	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getCategoriesAPI = async () => {
		setIsLoading(true);
		try {
			const res = await axios.get(`${config.api_host_dev}/cms/categories`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			setIsLoading(false);
			setData(res.data.data);
		} catch (err) {
			setIsLoading(false);
			console.log(err);
		}
	};

	useEffect(() => {
		getCategoriesAPI();
	}, []);

	if (!token) return <Navigate to='/signin' replace={true} />;

	return (
		<>
			<SNavbar />

			<Container className='mt-3'>
				<SBreadCrumb textSecond='Categories' />

				<SButton action={() => navigate('/categories/create')}>Tambah</SButton>

				<Table className='mt-3' striped bordered hover variant='dark'>
					<thead>
						<tr>
							<th>No</th>
							<th>Name</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{isLoading ? (
							<tr>
								<td colSpan={data.length + 1} style={{ textAlign: 'center' }}>
									<div className='flex items-center justify-center'>
										<Spinner animation='grow' variant='dark' />
									</div>
								</td>
							</tr>
						) : (
							data.map((data, index) => (
								<tr key={(index += 1)}>
									<td>{(index += 1)}</td>
									<td>{data.name}</td>
									<td>Otto</td>
								</tr>
							))
						)}
					</tbody>
				</Table>
			</Container>
		</>
	);
}

export default PageCategories;

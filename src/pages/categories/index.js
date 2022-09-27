/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Container, Table, Spinner } from 'react-bootstrap';

import SButton from '../../components/Button';
import SBreadCrumb from '../../components/Breadcrumb';

function PageCategories() {
	const navigate = useNavigate();

	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	return (
		<>
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

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';

import SAlert from '../../components/Alert';
import SForm from './form';
import { config } from '../../configs';

function PageSignin() {
	const token = localStorage.getItem('token');
	const navigate = useNavigate();
	const [form, setForm] = useState({
		email: '',
		password: '',
	});

	const [alert, setAlert] = useState({
		status: false,
		message: '',
		type: '',
	});

	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async () => {
		setIsLoading(true);

		try {
			const res = await axios.post(
				`${config.api_host_dev}/cms/auth/signin`,
				form
			);
			
			localStorage.setItem('token', res.data.data.token);
			setIsLoading(false);
			navigate('/');
		} catch (err) {
			setIsLoading(false);
			setAlert({
				status: true,
				message: err?.response?.data?.msg ?? 'Internal server error',

				type: 'danger',
			});
		}
	};

	if (token) return <Navigate to='/' replace={true} />;

	return (
		<Container md={12} className='my-5'>
			<div className='m-auto' style={{ width: '50%' }}>
				{alert.status && (
					<SAlert type={alert.type} message={alert.message}></SAlert>
				)}
			</div>
			<Card style={{ width: '50%' }} className='m-auto mt-5'>
				<Card.Title className='text-center mt-2'>Welcome Back!</Card.Title>
				<Card.Body>
					<SForm
						form={form}
						isLoading={isLoading}
						handleChange={handleChange}
						handleSubmit={handleSubmit}
					/>
				</Card.Body>
			</Card>
		</Container>
	);
}

export default PageSignin;

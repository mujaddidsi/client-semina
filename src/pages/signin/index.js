import React, { useState } from 'react';
import axios from 'axios';

import { Form, Card, Container } from 'react-bootstrap';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import SButton from '../../components/Button';
import SAlert from '../../components/Alert';

function PageSignin() {
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
				'http://localhost:9000/api/v1/cms/auth/signin',
				{
					email: form.email,
					password: form.password,
				}
			);
			console.log(res.data.token);
			setIsLoading(false);
		} catch (err) {
			setIsLoading(false);
			setAlert({
				status: true,
				message: err?.response?.data?.msg ?? 'Internal server error',

				type: 'danger',
			});
		}
	};

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
					<Form>
						<TextInputWithLabel
							label='Email address'
							name='email'
							value={form.email || ''}
							type='email'
							placeholder='Enter email'
							onChange={handleChange}
						/>

						<TextInputWithLabel
							label='Password'
							name='password'
							value={form.password || ''}
							type='password'
							placeholder='Enter password'
							onChange={handleChange}
						/>

						<SButton
							loading={isLoading}
							disabled={isLoading}
							// action={handleSubmit}
							variant='primary'>
							Submit
						</SButton>
					</Form>
				</Card.Body>
			</Card>
		</Container>
	);
}

export default PageSignin;

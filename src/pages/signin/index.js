import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import SForm from './form';
import SAlert from '../../components/Alert';
import { postData } from '../../utils/fetch';
import { userLogin } from '../../redux/auth/actions';

function PageSignin() {
	const dispatch = useDispatch();
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
			const res = await postData(`/cms/auth/signin`, form);

			dispatch(userLogin(res.data.data.token, res.data.data.role));

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

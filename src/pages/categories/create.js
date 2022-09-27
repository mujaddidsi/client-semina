import axios from 'axios';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import SBreadCrumb from '../../components/Breadcrumb';
import SAlert from '../../components/Alert';
import SForm from './form';
import { config } from '../../configs';
import SNavbar from '../../components/Navbar';

function CategoriesCreate() {
	const navigate = useNavigate();
	const token = localStorage.getItem('token');

	const [form, setForm] = useState({
		name: '',
	});

	const [alert, setAlert] = useState({
		status: false,
		type: '',
		message: '',
	});

	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async () => {
		setIsLoading(true);
		try {
			await axios.post(`${config.api_host_dev}/cms/	categories`, form, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			navigate('/categories');
			setIsLoading(false);
		} catch (err) {
			setIsLoading(false);
			setAlert({
				...alert,
				status: true,
				type: 'danger',
				message: err.response.data.msg,
			});
		}
	};

	return (
		<>
			<Container>
				<SBreadCrumb
					textSecond={'Categories'}
					urlSecond={'/categories'}
					textThird='Create'
				/>
				{alert.status && <SAlert type={alert.type} message={alert.message} />}
				<SForm
					form={form}
					isLoading={isLoading}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
			</Container>
		</>
	);
}

export default CategoriesCreate;

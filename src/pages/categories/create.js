import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import SBreadCrumb from '../../components/Breadcrumb';
import SAlert from '../../components/Alert';
import SForm from './form';

import { useNavigate } from 'react-router-dom';

function CategoriesCreate() {
	const navigate = useNavigate();

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
			// const res = await postData('api/v1/categories', form);

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
		<Container>
			<SBreadCrumb
				textSecound={'Categories'}
				urlSecound={'/categories'}
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
	);
}

export default CategoriesCreate;

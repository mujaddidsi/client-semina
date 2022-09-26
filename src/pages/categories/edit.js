import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SBreadCrumb from '../../components/Breadcrumb';
import SAlert from '../../components/Alert';
import SForm from './form';
import { useNavigate } from 'react-router-dom';

function CategoriesEdit() {
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

	const fetchOneCategories = async () => {
		// const res = await getData(`api/v1/categories/${categoryId}`);
		// setForm({ ...form, name: res.data.data.name });
	};

	useEffect(() => {
		fetchOneCategories();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleSubmit = async () => {
		setIsLoading(true);
		try {
			// const res = await putData(`api/v1/categories/${categoryId}`, form);

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
				textSecond={'Categories'}
				urlSecond={'/categories'}
				textThird='Edit'
			/>
			{alert.status && <SAlert type={alert.type} message={alert.message} />}
			<SForm
				edit
				form={form}
				isLoading={isLoading}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
		</Container>
	);
}

export default CategoriesEdit;

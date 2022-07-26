import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SBreadCrumb from '../../components/Breadcrumb';
import SButton from '../../components/Button';
import Table from '../../components/TableWithAction';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../redux/categories/actions';
import SAlert from '../../components/Alert';
import Swal from 'sweetalert2';
import { deleteData } from '../../utils/fetch';
import { setNotif } from '../../redux/notif/actions';
import { accessCategories } from '../../const/access';

function Categories() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const notif = useSelector((state) => state.notif);
	const categories = useSelector((state) => state.categories);
	const [access, setAccess] = useState({
		add: false,
		delete: false,
		edit: false,
	});

	const checkAccess = () => {
		let { role } = localStorage.getItem('auth')
			? JSON.parse(localStorage.getItem('auth'))
			: {};
		const access = { add: false, delete: false, edit: false };
		Object.keys(accessCategories).forEach(function (key, index) {
			if (accessCategories[key].indexOf(role) >= 0) {
				access[key] = true;
			}
		});
		setAccess(access);
	};

	useEffect(() => {
		checkAccess();
	}, []);

	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);

	const handleDelete = (id) => {
		Swal.fire({
			title: 'Are you sure?',
			text: 'You will not be able to return this!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Delete',
			cancelButtonText: 'Cancel',
		}).then(async (result) => {
			if (result.isConfirmed) {
				const res = await deleteData(`/cms/categories/${id}`);
				dispatch(
					setNotif(
						true,
						'success',
						`Successfully deleted category ${res.data.data.name}`
					)
				);
				dispatch(fetchCategories());
			}
		});
	};

	return (
		<Container className='mt-3'>
			<SBreadCrumb textSecond={'Categories'} />

			{access.add && (
				<SButton
					className={'mb-3'}
					action={() => navigate('/categories/create')}>
					Add
				</SButton>
			)}

			{notif.status && (
				<SAlert type={notif.typeNotif} message={notif.message} />
			)}

			<Table
				status={categories.status}
				thead={['Name', 'Action']}
				data={categories.data}
				tbody={['name']}
				editUrl={access.edit ? `/categories/edit` : null}
				deleteAction={access.delete ? (id) => handleDelete(id) : null}
				withoutPagination
			/>
		</Container>
	);
}

export default Categories;

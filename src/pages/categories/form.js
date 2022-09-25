import React from 'react';
import { Form } from 'react-bootstrap';
import SButton from '../../components/Button';
import TextInputWithLabel from '../../components/TextInputWithLabel';

export default function CategoriesForm({
	handleSubmit,
	form,
	handleChange,
	isLoading,
	edit,
}) {
	return (
		<Form>
			<TextInputWithLabel
				placeholder={'Input category name'}
				label={'Category name'}
				name='name'
				value={form.name}
				type='text'
				onChange={handleChange}
			/>
			<SButton variant='primary' action={handleSubmit} loading={isLoading}>
				{edit ? 'Change' : 'Save'}
			</SButton>
		</Form>
	);
}

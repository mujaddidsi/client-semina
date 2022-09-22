import React, { useState } from 'react';
import { Form, Card, Container, Button } from 'react-bootstrap';
// import SButton from '../../components/Button';

function PageSignin() {
	const [form, setForm] = useState({
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		setForm({ ...form.email, [e.target.name]: e.target.value });
	};

	return (
		<Container md={12}>
			<Card style={{ width: '50%' }} className='m-auto mt-5'>
				<Card.Title className='text-center mt-2'>Welcome Back!</Card.Title>
				<Card.Body>
					<Form>
						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Label>Email address</Form.Label>
							<Form.Control name='email' value={form.email} type='email' placeholder='Enter email' onChange={handleChange} />
						</Form.Group>

						<Form.Group className='mb-3' controlId='formBasicPassword'>
							<Form.Label>Password</Form.Label>
							<Form.Control name='password' value={form.password} type='password' placeholder='Password' onChange={handleChange} />
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicCheckbox'>
							<Form.Check type='checkbox' label='Keep login' />
						</Form.Group>
						<Button variant='primary'>Submit</Button>
					</Form>
				</Card.Body>
			</Card>
		</Container>
	);
}

export default PageSignin;

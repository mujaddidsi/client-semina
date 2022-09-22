import React from 'react';
import { Button, Form, Card, Container } from 'react-bootstrap';

function PageSignin() {
	return (
		<Container>
			<Card style={{ width: '18rem' }}>
				<Card.Title>Welcome Back!</Card.Title>
				<Card.Subtitle className='mb-2 text-muted'>to the store</Card.Subtitle>
				<Card.Body>
					<Form>
						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Label>Email address</Form.Label>
							<Form.Control type='email' placeholder='Enter email' />
							<Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
						</Form.Group>

						<Form.Group className='mb-3' controlId='formBasicPassword'>
							<Form.Label>Password</Form.Label>
							<Form.Control type='password' placeholder='Password' />
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicCheckbox'>
							<Form.Check type='checkbox' label='Check me out' />
						</Form.Group>
						<Button variant='primary' type='submit'>
							Submit
						</Button>
					</Form>
				</Card.Body>
			</Card>
		</Container>
	);
}

export default PageSignin;

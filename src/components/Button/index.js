import React from 'react';

export default function Button(props) {
	const { onClick, children } = props;
	return <button onClick={onClick}>{children}</button>;
}

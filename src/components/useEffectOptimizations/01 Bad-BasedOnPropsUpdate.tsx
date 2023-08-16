import React, { useState, useEffect } from 'react';

const BasedOnPropsUpdate = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

	console.time('❌')
	// ❌ useState will use extra resources and time
  const [wrongFullName, setWrongFullName] = useState('');
	
	// ❌ useEffect will trigger an extra render and be error-prone
	useEffect(() => {
		setWrongFullName(`${firstName} ${lastName}`);
	}, [firstName, lastName]);
	console.timeEnd('❌')

	return (
		<div>
			<br />
			<input
				value={firstName}
				placeholder='First Name'
				onChange={(event) => (setFirstName(event.target.value)) }
			/>
			<input
				value={lastName}
				placeholder='Last Name'
				onChange={(event) => (setLastName(event.target.value)) }
			/>
			<div>{`Full name with useEffect: ${wrongFullName}`}</div>
		</div>
	)
};

export { BasedOnPropsUpdate };

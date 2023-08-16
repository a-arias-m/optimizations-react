import React, { useState } from 'react';

const BasedOnPropsUpdateWellDone = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
	
  console.time('✅')
	// ✅ Calculate it during rendering will make it faster and simpler and less error-prone 
	const rightFullName = `${firstName} ${lastName}`;
  console.timeEnd('✅')

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
			<div>{`Full name at rendering: ${rightFullName}`}</div>
		</div>
	)
};

export { BasedOnPropsUpdateWellDone };

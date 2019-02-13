import React, { useState, useEffect } from 'react';

const Await = ({pending, children}) => {
	const [result,resolve] = useState(null);

	useEffect(() => {
		children.then(resolve)
	}, [children]);

	return result || pending();
};

export default Await;

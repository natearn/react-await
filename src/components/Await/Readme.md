
example:

```js
	const Loading = () => <p>loading...</p>;
	const ShowData = ({data}) => <p>{data}</p>;
	const fetchData = new Promise(
		(resolve) => setTimeout(resolve,3000,{data: 'hello'})
	);

	<Await pending={Loading}>
		{fetchData.then(ShowData)}
	</Await>
```


example:

```js
	<PromiseComponent pending={() => <p>loading...</p>}>
		{new Promise((resolve,reject) => {
			setTimeout(
				() => resolve(<p>loaded!</p>),
				2000
			);
		})}
	</PromiseComponent>
```

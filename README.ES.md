# asyncforeach

Utilidad para ejecutar una función asíncrona secuencialmente en forEach para un array

```
npm install asyncforeach_pe
```

## Uso

```
var asyncForEach = require('asyncforeach_pe');

(async () => {
	const testTime = () => {
		return new Promise(async (resolve, reject) => {
			setTimeout(() => {
				console.log('thinkking');
				resolve();
			}, 1500);
		});
	};

	await asyncForEach([1, 2, 3], async (item, i) => {
		console.log('Item and index', { item, i });
		await testTime();
	});
})();

```

# asyncforeach

Utility to execute an asynchronous function sequentially in forEach for an array

```
npm install asyncforeach_pe
```

[🇵🇪 Spanish - Español](https://github.com/confluxpe/asyncforeach/blob/main/README.ES.md)

## Usage

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

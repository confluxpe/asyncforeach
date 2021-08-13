/**
 * asyncForEach
 * Execute an asynchronous function sequentially in forEach for an array.
 * @param {Items} array 
 * @param {Callback} callback 
 */
const asyncForEach = async function(array, callback){
	for (let index = 0; index < array.length; index++) {
		await callback(array[index], index, array);
	}
};

module.exports = asyncForEach;
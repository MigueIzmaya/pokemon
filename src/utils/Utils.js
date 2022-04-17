export function searchProductsInStock (time, task) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            console.log(task);

            const result = task.filter(product => product.stock > 0);

            console.log(result);

            if (result.length > 0) {
                resolve(result);
            } else {
                reject("Error in the customFetch :(");
            }
        }, time);
    });
}
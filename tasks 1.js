class NetworkRequest {
    sum(num1, num2) {
        return new Promise((res, rej) => {
            try {
                if (num1 && num2 && typeof (num1) != 'number' && typeof (num2) != 'number') {
                    return rej("Please enter valid input");
                }
                return res(num1 + num2);
            } catch (e) {
                rej("Internal Server Error " + e);
            }
        })
    }
}

class CacheStorage {
    storage = {};

    sum(num1, num2) {
        return new Promise(async (res, rej) => {
            try {
                const currentRes = this.storage[`${num1}_${num2}`];
                if (currentRes) {
                    return res(currentRes);
                } else {
                    const NetworkRequestObj = new NetworkRequest();
                    const result = await NetworkRequestObj.sum(num1, num2);
                    return res(result);
                }
            } catch (e) {
                rej(e);
            }
        });
    }
}

const sum = async (num1, num2) => {
    try {
        const CacheStorageObj = new CacheStorage();
        const result = await CacheStorageObj.sum(num1, num2);
        return result;
    } catch (e) {
        return e;
    }
}

const trigger = async () => {
    const result1 = await sum(25, 10);
    console.log(result1);
    const result2 = await sum(25, 10);
    console.log(result2)
}
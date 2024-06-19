function handleUndefinedPropertyError(obj, prop) {
    try {
        console.log(obj[prop]);
    } catch (error) {
        if (error instanceof TypeError && error.message.includes('Cannot read properties of undefined')) {
            console.error('Ошибка: Попытка доступа к свойству несуществующего объекта');
        } else {
            throw error;
        }
    }
}

let obj;
handleUndefinedPropertyError(obj, 'property');
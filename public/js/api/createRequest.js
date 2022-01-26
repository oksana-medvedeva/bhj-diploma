/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    try {
        let url = options.url;
        if (options.method === 'GET') {
            let queryParams = '';
            for (var prop in options.data) {
                queryParams += (queryParams === '' ? '?' : '&') + prop + '=' + options.data[prop];
            }
            url += encodeURI(queryParams);
        }
        xhr.open(options.method, url);
        xhr.onload = () => {
            options.callback(null, xhr.response);
        }
        xhr.onerror = () => {
            options.callback('error', null);
        }

        if (options.method === 'GET') {
            xhr.send();
        } else {
            const formData = new FormData();
            for (var prop in options.data) {
                formData.append(prop, options.data[prop]);
            }
            xhr.send(formData);
        }
    }
    
    catch (err) {
        options.callback(err, null)
    }
};

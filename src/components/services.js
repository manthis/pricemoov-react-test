
import axios from 'axios';

class ApiClient {
    static fetchData(url, callback) {
        axios.get(url)
        .then(response => callback(response))
        .catch(error => {
            console.log(error);
            document.write('There was an error: ' + error + '! API went down again! Damn!!!<br/>');
        });
    };
}

export default ApiClient;
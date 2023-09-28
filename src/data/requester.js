import axios from 'axios';

/**
 * @param {*} method The method which axios will execute 'get', 'post', etc...
 * @param {*} endpoint The URL which the API will call upon
 * @param {*} data The body of the request
 * @param {*} callback Handles the response from the HTTP request
 */

 const requester = async (method, endpoint, data, callback) => {
    try
    {
        // The result will be the return from axios
        const response = await axios[method](
            'http://localhost:3000/' + endpoint,
            data
        );

        return callback(response)
    }
    catch (err)
    {
        console.log (err, err.response);
    };
};

export default requester;
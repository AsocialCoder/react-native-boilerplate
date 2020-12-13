import Axios from "axios";
import _ from "lodash";

import {getToken, removeToken} from "models/auth";
import config from "config/cofing";


const API_URL = config.apiUrl;


const request = async (path, {method = "get", data, headers = {}, options={}}) => {
    try {
        let acceptMethods = ["", "get", "post", "put", "patch", "delete"];
        let token = await getToken();

        const customHeaders = {
            "Content-Type": "application/json",
            ...headers
        };

        if (!acceptMethods.includes(method)) {
            throw new Error("Invalid Method");
        }

        if (token !== null){
            customHeaders.Authorization = `Bearer ${token}}`;
        }

        const requestOptions = {
            url: `${API_URL}${path}`,
            method: method,
            headers: customHeaders,
            ...options
        };

        if (method !== "get" && data){
            requestOptions.data = data;
        }
    
        console.log(requestOptions);
        return await Axios({...requestOptions});
    }
    catch (error) {
        console.log("RequestErr", error);
        const statusCode = _.result(error, "response.status");

        if (statusCode === 401){
            await removeToken();
        }

        return Promise.reject(_.result(error, "response.data"));
        
    }
};

export {request};

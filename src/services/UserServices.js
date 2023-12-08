import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/register"

class UserServices{
    saveEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }
}

export default new UserServices();
import axios from "axios";
const API_URL = "http://localhost:8080/api/";

class TableService{
    getTable(line, op){
        return axios.get(API_URL + `/table/${line}/${op}`);  
    };
    getAllLines(){
        return axios.get(API_URL + "table/all");
    }
}

export default new TableService();
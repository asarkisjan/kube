import axios from "axios";
import { JPA_API_URL } from "../Constants";

class TodoDataService {
  retrieveAllPersons() {
    return axios.get(`${JPA_API_URL}/api/persons`);
  }
}

export default new TodoDataService();

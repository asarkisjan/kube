import axios from "axios";

class TodoDataService {
  retrieveAllPersons() {
    return axios.get("/api/persons");
  }
}

export default new TodoDataService();

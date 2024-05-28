import axios from "axios"

const baseUrl = 'http://localhost:3001/persons'

const create = newPerson => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}
const getAll = () => {
    const request = axios.get(baseUrl);
    const nonExisting = {
        "name": "Not Exist",
        "number": "0321-07048601",
        "id": 1000
    }
    return request.then(response => response.data.concat(nonExisting))
}
const update = (id, person) => {
    const request = axios.put(`${baseUrl}/${id}`, person)
    return request.then(response => response.data)
}
const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default { create, update, getAll, deletePerson }
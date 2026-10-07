import axios from "axios";

const username = "coalition";
const password = "skills-test";

// Encode username:password
const token = btoa(`${username}:${password}`);

const api = axios.create({
    baseURL: "https://fedskillstest.coalitiontechnologies.workers.dev",
    headers: {
        Authorization: `Basic ${token}`,
        "Content-Type": "application/json",
    },
});

export default api;
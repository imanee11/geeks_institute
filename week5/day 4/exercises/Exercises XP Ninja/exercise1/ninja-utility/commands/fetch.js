import axios from 'axios';

export default async function () {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log("Fetched Data:", res.data);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

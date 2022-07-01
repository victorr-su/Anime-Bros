import axios from "axios"

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTYyYzZiNGQwNDgzY2Q0MjFhNzEyNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjMzNzUyMCwiZXhwIjoxNjU2NTk2NzIwfQ.TaiabU5H7Le2jbxWfxnZStbCHMLorSmyCnoDXLtJmr8";

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}` },
})
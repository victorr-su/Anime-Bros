import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTYyYzZiNGQwNDgzY2Q0MjFhNzEyNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODg1ODI4MywiZXhwIjoxNjU5MTE3NDgzfQ.m3k7qGSlv9QWBERaD4uiXTrtVI3D0iDUMZPNC4RE1lw"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

export const APP_ENV = "development"; // Or "production".

export const SERVER_URL = (APP_ENV === "production") ? "https://kevsong.com" : "http://localhost:8081";
export const MESSAGE_SEND_ROUTE = "msg-send";
export const MESSAGE_GET_ROUTE = "msg-get";
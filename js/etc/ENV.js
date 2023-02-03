export const APP_ENV = "development"; // "development" or "production".

export const SERVER_URL = (APP_ENV === "production") ? "https://kevsong.com/beeivedesign-server" : "http://localhost:8080";
// export const SERVER_URL = "https://kevsong.com/beeivedesign-server";
export const JWT_STORAGE_PROP = "jwt-beeivedesign";
export const MESSAGE_SEND_ROUTE = "msg-send";
export const MESSAGE_GET_ROUTE = "msg-get";
export const LOGIN_ROUTE = "login";
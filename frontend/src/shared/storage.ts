import { Order } from "../types";

const getOrderId = () => {
    const name = "orderId=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    const cookie = cookies.find(cookie => cookie.indexOf(name) === 0);
    console.log(cookies);
    
    return cookie?.substring(name.length, cookie.length);
  }
  
export const storeOrder = (order: Order[]) => {
    const orderId = getOrderId();
    sessionStorage.setItem(orderId!, JSON.stringify(order))
}

export const getOrder = () => {
    const orderId = getOrderId();
    if (orderId) {
        const stored = sessionStorage.getItem(orderId);
        if(!stored) return [];
        return JSON.parse(stored!);
    }

    return [];
}

export const clearOrder = () => {
    sessionStorage.clear();
}
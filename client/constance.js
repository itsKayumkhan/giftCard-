// export const REACT_APP_API_URL = "http://localhost:8000/api/v1";
export const REACT_APP_API_URL= "https://giftcardbackend.onrender.com"
export const GET_IMG = (id) => `${REACT_APP_API_URL}/product/photo/${id}`;

export const LOADER_IMG_URL =
  "https://blog.openreplay.com/images/3-ways-to-implement-skeleton-components-in-react/images/img3.gif";
export const USER_IMG_URL =
  "https://cdn3.iconfinder.com/data/icons/interface-106/24/User-128.png";

export const LOADER_CAROUSEL_URL = "https://i.stack.imgur.com/TzjE6.png";

export const JWT_TOKEN =
  (localStorage.getItem("token") !== "" &&
    JSON.parse(localStorage.getItem("token"))) ||
  "";
export const HEADER = () => ({ Authorization: `Bearer ${JWT_TOKEN}` });

export function sendWhatsAppMessage(message = " hello") {
  // Ensure the phone number is in international format with the '+' sign and country code
  const formattedPhoneNumber = "+916378492842";

  // URL encode the message
  const encodedMessage = encodeURIComponent(message);

  // Create the WhatsApp message link
  const whatsappLink = `https://wa.me/${formattedPhoneNumber}/?text=${encodedMessage}`;

  // Open the link in a new window
  window.open(whatsappLink, "_blank");
}

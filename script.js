const API_URL = "https://sh-akgc.onrender.com";
const BASE_URL = "https://api-ssl.bitly.com";
const ACESS_TOKEN = "220700cde8d496fc81ab71f5dfb9a0c6d8793d75";

const Shorten = async (el) => {
  const [text] = el;
  const output = document.querySelector("#output");

  const response = await fetch(`${BASE_URL}/v4/shorten`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACESS_TOKEN}`,
    },
    body: JSON.stringify({
      long_url: text.value,
      domain: "bit.ly",
    }),
  });

  const data = await response.json();

  if (response.ok) {
    output.innerText = `${data.link}`;
    text.value == "";
    alert(data.link);
  } else {
    output.innerHTML = `${data.description}`;
  }
};

// const copyClip = () => {
//   const textarea = document.createElement("textarea");
//   textarea.value = output.innerText;
//   document.body.appendChild(textarea);
//   textarea.select();
//   document.execCommand("copy");
//   document.body.removeChild(textarea);
//   console.log("copied");
// };

// copy.addEventListener("click", copyClip);

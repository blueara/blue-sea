export default function auth() {
  if (email === "admin@gmail.com" && password === "admin@gmail.com") {
    window.location.assign("project02.html");
    alert("Welcome Admin!");
  } else {
    alert("Invalid Information");
  }
}
// autho

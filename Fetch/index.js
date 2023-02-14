import auth from "./auth.js";
import image from "./image/1.jpg";

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function getData() {
    Axios.get(API_URL).then((res) => {
      console.log(res.data);
      setList(res.data);
    });
  }
}

class Crew extends Person {
  constructor(name, email, password) {
    super(name, email, password);
    this.password = password;
  }

  introduceCrew() {}

  sayHello() {
    super.sayHello();
  }
}

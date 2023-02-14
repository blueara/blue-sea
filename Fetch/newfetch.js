//random img src:https://picsum.photos/200/300

fetch("./src/data.json").then((res) => {
  res.json().then((data) => {
    console.log(data);
  });
});

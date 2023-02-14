fetch(`https://picsum.photos/200/300`).then((res) => {
  res.json().then((data) => {
    console.log(data);
    if (data.length > 0) {
      var temp = "";
      //--- start for loop
      data.forEach((u) => {
        temp += "<tr>";
        temp += "<td>" + u.id + "</td>";
        temp += "<td>" + u.name + "</td>";
        temp += "<td>" + u.salary + "</td>";
      });
      //--- close for loop
      document.getElementById("data").innerHTML = temp;
    }
  });
});

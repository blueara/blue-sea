const API_KEY =
  "sIpipS0hKFjVCM5T6Id1FpCOYJyVxtdrZktTgHtwr6xUaN6Aph4UXOfWle5zo6IM6Eps%2BNETxvOkm0LwtP%2Bh0Q%3D%3D";

async function getData() {
  const url = `http://apis.data.go.kr/B552061/frequentzoneBicycle/getRestFrequentzoneBicycle?ServiceKey=${API_KEY}&searchYearCd=2015&siDo=11&guGun=680&type=json&numOfRows=10&pageNo=1`;
  const response = await fetch(url);
  const data = await response.json();
  console.log("data", data);
}
getData();

const MAP_KEY = "AIzaSyClbhCReiK_rnC6V3GljG3Z0G4Opu6UpS0";

function drawMap(locations) {
  // locations = [["지역이름", 위도, 경도],["지역이름", 위도, 경도]]

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: new google.maps.LatLng(locations[0][1], locations[0][2]),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });

  const infowindow = new google.maps.InfoWindow();
}

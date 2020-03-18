function trocar() {
  element = document.getElementById("vagalume");
  if (element.src.match("./images/vagalume.jpg")) {
    element.src = "./images/vagalume1.jpg";
    $.post("/light/off", { status: "Sucesso", data: "Ligado" }, function(
      returnedData,
      statusRequest
    ) {
      alert("Data: " + returnedData.data + "\nStatus: " + returnedData.status);
    });
  } else {
    element.src = "./images/vagalume.jpg";
    $.post("/light/on", { status: "Sucesso", data: "Desligado" }, function(
      returnedData,
      statusRequest
    ) {
      alert("Data: " + returnedData.data + "\nStatus: " + returnedData.status);
    });
  }
}

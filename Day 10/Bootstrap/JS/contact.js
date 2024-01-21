function getData() {
  const Ipname = document.getElementById("Ipnama").value;
  const Ipemail = document.getElementById("Ipemail").value;
  const Ipphone = document.getElementById("Ipphone").value;
  const Ipsubject = document.getElementById("Ipsubject").value;
  const Ippesan = document.getElementById("Ippesan").value;

  if (!Ipname) {
    alert("Nama harus diisi");
  } else if (!Ipemail) {
    alert("Email harus diisi");
  } else if (!Ipphone) {
    alert("Phone number harus diisi");
  } else if (!Ipsubject) {
    alert("Subject harus diisi");
  } else if (!Ippesan) {
    alert("Message harus diisi");
  } else {
    console.log(
      `Name : ${Ipname}\nEmail: ${Ipemail}\nPhone: ${Ipphone}\nSubject: ${Ipsubject}\nMessage: ${Ippesan}`
    );

    let a = document.createElement("a");
    a.href = `mailto:${Ipemail}?subject=${Ipsubject}&body=${Ippesan}`;
    a.click();
  }
}

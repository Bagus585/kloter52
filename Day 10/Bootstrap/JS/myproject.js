let data = [];

function submitBlog(event) {
  event.preventDefault();

  // variabel Dokumen Object Model
  let inputTitle = document.getElementById("iName").value;
  let inputStart = document.getElementById("onDate").value;
  let inputEnd = document.getElementById("enDate").value;
  let inputDesc = document.getElementById("description").value;
  let inputNode = document.getElementById("tech1").checked;
  let inputReact = document.getElementById("tech2").checked;
  let inputNext = document.getElementById("tech3").checked;
  let inputTypes = document.getElementById("tech4").checked;
  let inputImage = document.getElementById("gambar").files;

  //Alert harus diisi
  if (inputTitle === "") {
    alert("Project harus diisi");
    return;
  }
  if (inputDesc === "") {
    alert("Description harus diisi");
    return;
  }
  if (inputImage === 0) {
    alert("Upload image dulu broo");
    return;
  }

  //display image menjadi URL dan [0] mengambil data index pertama
  inputImage = URL.createObjectURL(inputImage[0]);

  // display duration
  let start = new Date(inputStart);
  let end = new Date(inputEnd);

  if (start > end) {
    return alert("Tanggal awal Tidak boleh lebih besar Dari Tanggal akhir");
  }

  let timeDifference = end.getTime() - start.getTime();
  let days = timeDifference / (1000 * 60 * 60 * 24);
  let weeks = Math.floor(days / 7);
  let months = Math.floor(weeks / 4);
  let years = Math.floor(months / 12);

  let duration = "";

  // validasi time data
  if (days > 0) {
    duration = `${days} Day`;
  }
  if (weeks > 0) {
    duration = `${weeks} Week`;
  }
  if (months > 0) {
    duration = `${months} Month`;
  }
  if (years > 0) {
    duration = `${years} Year`;
  }

  const panggil = {
    inputTitle,
    inputStart,
    inputEnd,
    duration,
    inputAuthor: `Adhek Bagus`,
    inputDesc,
    inputNode,
    inputReact,
    inputNext,
    inputTypes,
    inputImage,
  };

  data.push(panggil);
  renderProject();

  function renderProject() {
    document.getElementById("project-li").innerHTML = "";
    for (let index = 0; index < data.length; index++) {
      document.getElementById("project-li").innerHTML += `
      <hr>
      <div  class="d-flex justify-content-center flex-wrap gap-3 p-4 mt-3 " id="project-li">
      <div class=" saha d-flex flex-column justify-content-between border rounded p-4" style="background-color: aliceblue; width: 300px;">
        <div class="3">
          <img style="width: 100%; height: 190px; border-radius: 7px;" src="${
            data[index].inputImage
          }" />
        </div>
        <div class=" ptoject-image">
          <a class="nav-link text-dark fw-bold fs-5" href="detail-project.html"> ${
            data[index].inputTitle
          }</a>
          <div class="text-dark" style="font-size: 10px; font-weight: 200;">
            <p >Duration : ${data[index].duration} | Author : ${
        data[index].inputAuthor
      } </p></p>
          </div>
  
          <p class="text-dark" style="text-align: justify;">
          ${data[index].inputDesc}
          </p>
        </div>
        <div class="project-icon text-dark d-flex gap-5 justify-content-center " style="font-size: 30px;">                    
        ${renderTechImages(data[index])}
  </div>
  
        <div class="d-flex justify-content-center  align-items-end  mt-2  gap-3" style="width: 100%;">
          <div class="w-50">
            <button class="d-flex justify-content-center border-0  fw-bold" style=" padding: 3px 35px; background-color: orange;">Delete</button>
          </div>
          <div class="w-50">
            <button class="d-flex justify-content-center border-0  fw-bold" style=" padding: 3px 46px; margin-left: 2px;  background-color: orange;">Edit</button>
          </div>
        </div>
      </div>
  </div>`;
    }
  }

  function renderTechImages(Object) {
    let renderImages = "";

    if (Object.inputNode) {
      renderImages += `<i class="fa-brands fa-node"></i>`;
    }
    if (Object.inputReact) {
      renderImages += `<i class="fa-brands fa-react"></i>`;
    }
    if (Object.inputNext) {
      renderImages += ` <i class="fa-brands fa-golang"></i>`;
    }
    if (Object.inputTypes) {
      renderImages += ` <i class="fa-brands fa-js"></i>`;
    }
    return renderImages;
  }
}

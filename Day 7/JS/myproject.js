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
              <div class="project-container" id="project-item">
                      <a href="detail-project.html">
                      <div class="project-image">
                          <img src="${data[index].inputImage}">
                      </div>
                      <p style="font-weight: bold;">${
                        data[index].inputTitle
                      }</p>
                      <p style="font-size: 15px; color: black ;"> Duration : ${
                        data[index].duration
                      } | Author : ${data[index].inputAuthor} </p>
      
                      <div class="project-content">
                          <p>
                              ${data[index].inputDesc}
                          </p>
                      </div>
      
                     <div class="project-icon">                                           
                          <ul>
                              ${renderTechImages(data[index])}
                          </ul>
                      </div>
                      <div class="project-button">
                          <button class="edit" type="button">Edit</button>
                          <button class="delete" type="button">Delete</button>
                      </div>
                      </a>
                  </div>`;
    }
  }

  function renderTechImages(Object) {
    let renderImages = "";

    if (Object.inputNode) {
      renderImages += `<li><img style="width: 30px" src="Asset/image/node.png" alt="node-js"></li>`;
    }
    if (Object.inputReact) {
      renderImages += `<li><img style="width: 30px" src="Asset/image/react.png" alt="node-js"></li>`;
    }
    if (Object.inputNext) {
      renderImages += `<li><img style="width: 30px" src="Asset/image/Next.js.png" alt="next-js"></li>`;
    }
    if (Object.inputTypes) {
      renderImages += `<li><img style="width: 30px" src="Asset/image/TypeScript.png" alt="typescript"></li>`;
    }
    return renderImages;
  }
}

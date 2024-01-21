const testi = [
  {
    name: "Goerge",
    komen: "GREAT",
    ratting: 5,
    image:
      "https://img.washingtonpost.com/rw/2010-2019/WashingtonPost/2011/07/26/Blogs/blogpost/201107/Images/soros.jpg?uuid=tWzh4Ld8EeCYzBMQCYwsyQ",
  },
  {
    name: "jeff",
    komen: "AWESOME",
    ratting: 4,
    image:
      "https://th.bing.com/th/id/OIP.aKqXF7ZMkHnKYZVfLoxs2QAAAA?rs=1&pid=ImgDetMain",
  },
  {
    name: "Jhon",
    komen: "GOOD!",
    ratting: 3,
    image:
      "https://a.ltrbxd.com/resized/sm/upload/wp/bs/m0/17/john-wick-1200-1200-675-675-crop-000000.jpg?k=8443c456ec",
  },
  {
    name: "Wick",
    komen: "NOT GOOD",
    ratting: 2,
    image:
      "https://i.ytimg.com/vi/4VcMZJan6zw/hq2.jpg?sqp=-oaymwEoCOADEOgC8quKqQMcGADwAQH4Af4CgALgA4oCDAgAEAEYZSBMKFgwDw==&rs=AOn4CLC9bV2iIVWLha2oekoOiaXyBSwGjw",
  },
  {
    name: "MONYET",
    komen: "BAD",
    ratting: 1,
    image:
      "https://3.bp.blogspot.com/-YZw0Tv3hihk/VE699Km_EUI/AAAAAAAAHn4/gYp6JDzfe9s/s1600/wallpaper%2Bmonyet%2Blucu%2B-%2Bwww.binatang.mewarnaigambar.web.id.jpg",
  },
];
function RattingAll() {
  let rattingAllHtml = "";

  testi.forEach((item) => {
    rattingAllHtml += `
        <div class="testimoni">
                  <img src=${item.image} alt="testi" class="profile-testi">
                  <p class="quote"> "${item.komen}" </p>
                  <p class="author"> ${item.name}</p>
                  <p class="ratting-5"><i class="fa-solid fa-star">${item.ratting} </i>
                   </p>
                </div>`;
  });
  document.getElementById("testimonial").innerHTML = rattingAllHtml;
}
rattingAll();

// filtering function
function ScoreRatting(ratting) {
  let rattingAllHtml = "";

  const dataFilter = testi.filter((item) => item.ratting === ratting);

  if (dataFilter.length == 0) {
    rattingAllHtml = `<h3>Data not found!</h3>`;
  } else {
    dataFilter.forEach((item) => {
      rattingAllHtml += `
              <div class="testimoni">
                  <img src=${item.image} alt="testi" class="profile-testi">
                  <p class="quote"> ${item.komen} </p>
                  <p class="author"> ${item.name}</p>
                  <p class="ratting-5"><i class="fa-solid fa-star">${item.ratting} </i>
                   </p>
                </div>`;
    });
  }
  document.getElementById("testimonial").innerHTML = rattingAllHtml;
}

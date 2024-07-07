// document.addEventListener("DOMContentLoaded", function () {
//   const updatesContainer = document.getElementById("updates");

//   // URL của RSS feed
//   const rssUrl = "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml"; // Thay bằng URL của RSS feed bạn muốn sử dụng

//   // Hàm để lấy và hiển thị các bài viết mới
//   function fetchUpdates() {
//     fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`)
//       .then((response) => response.json())
//       .then((data) => {
//         updatesContainer.innerHTML = "";
//         data.items.forEach((item) => {
//           const article = document.createElement("div");
//           article.classList.add("article");

//           const title = document.createElement("h2");
//           const link = document.createElement("a");
//           link.href = item.link;
//           link.target = "_blank";
//           link.textContent = item.title;
//           title.appendChild(link);

//           const pubDate = document.createElement("p");
//           pubDate.textContent = new Date(item.pubDate).toLocaleString();

//           article.appendChild(title);
//           article.appendChild(pubDate);

//           updatesContainer.appendChild(article);
//         });
//       })
//       .catch((error) => {
//         console.error("Error fetching updates:", error);
//         updatesContainer.innerHTML = "Failed to load updates.";
//       });
//   }

//   // Gọi hàm fetchUpdates khi trang được tải
//   fetchUpdates();
// });
document.addEventListener("DOMContentLoaded", function () {
  const updatesContainer = document.getElementById("updates");

  // URL của trang web cần lấy thông tin
  const url = "https://daotao.ut.edu.vn/";

  // Hàm lấy và hiển thị thông tin cập nhật từ trang web
  function fetchUpdates() {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        const titles = doc.querySelectorAll("dt-cate-post-title"); // Thay thế bằng các selector CSS thích hợp để lấy tiêu đề bài viết

        updatesContainer.innerHTML = ""; // Xóa nội dung cũ trước khi cập nhật

        titles.forEach((title) => {
          const article = document.createElement("div");
          article.classList.add("article");

          const titleElement = document.createElement("h2");
          const linkElement = document.createElement("a");
          linkElement.href = title.getAttribute("href"); // Lấy URL từ các thẻ <a> trong trang web
          linkElement.textContent = title.textContent;

          titleElement.appendChild(linkElement);
          article.appendChild(titleElement);

          updatesContainer.appendChild(article);
        });
      })
      .catch((error) => {
        console.error("Error fetching updates:", error);
        updatesContainer.innerHTML = "Failed to load updates.";
      });
  }

  // Gọi hàm fetchUpdates khi trang được tải
  fetchUpdates();
});

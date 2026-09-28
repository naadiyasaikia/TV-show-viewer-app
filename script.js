const input = document.getElementById("input-show");
const submit = document.getElementById("submit-data");
const container = document.querySelector(".show-container");

submit.addEventListener("click", function(event) {
    event.preventDefault();
    const query = input.value.trim();
    fetch("https://api.tvmaze.com/search/shows?q=" + query)
        .then(response => response.json())
        .then(data => {
            container.innerHTML = "";
            data.forEach(item => {
                const show = item.show;
                const showData = document.createElement("div");
                showData.className = "show-data";
                const img = document.createElement("img");
                img.src = show.image.medium;
                const showInfo = document.createElement("div");
                showInfo.className = "show-info";

                const title = document.createElement("h2");
                title.textContent = show.name;
                const summary = document.createElement("p");
                summary.innerHTML = show.summary;
                showInfo.appendChild(title);
                showInfo.appendChild(summary);
                showData.appendChild(img);
                showData.appendChild(showInfo);
                container.appendChild(showData);
            });
        });
});

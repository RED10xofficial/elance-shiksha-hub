window.addEventListener("load", function (event) {
    setTimeout(function () {
        document.getElementById("modal-popup").classList.remove("hidden");
        document.getElementById("modal-popup").classList.add("opacity-100");
        document.querySelector(".cancel").addEventListener("click", function () {
            document.getElementById("modal-popup").classList.remove("opacity-100");
            document.getElementById("modal-popup").classList.add("hidden");

        });
        document.getElementById("download").addEventListener("click", function () {
            document.getElementById("modal-popup").classList.remove("opacity-100");
            document.getElementById("modal-popup").classList.add("hidden");
        });
    }, 5000);
});


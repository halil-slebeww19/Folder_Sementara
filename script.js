function sendMessage(event) {

    event.preventDefault();

    const nama = document.getElementById("nama").value;

    alert(
        "Terima kasih, " +
        nama +
        "! Pesan kamu berhasil dikirim ❤️"
    );

    event.target.reset();

}
function toggleHubungi() {
    const teks = document.getElementById("teksHubungi");

    if (teks.style.display === "none") {
        teks.style.display = "inline";
    } else {
        teks.style.display = "none";
    }
}
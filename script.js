feather.replace();

// Menu Hamburger
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerMenu.onclick = () => {
    navbarNav.classList.toggle("active");
};


// Menutup menu jika klik di luar
document.addEventListener("click", function (e) {

    if (
        !hamburgerMenu.contains(e.target) &&
        !navbarNav.contains(e.target)
    ) {
        navbarNav.classList.remove("active");
    }

});


// Produk Clayco
const productList = document.querySelector("#course-list");

productList.innerHTML = `

    <div class="menu-card">

        <img
            src="assets/cherry.png"
            alt="Cherry Keychain"
        >

        <div class="menu-card-content">

            <span>Clay Keychain</span>

            <h3>Cherry Keychain</h3>

            <p>
                Gantungan kunci clay berbentuk cherry
                dengan desain yang cute.
            </p>

            <strong>Rp15.000</strong>

            <a href="#contact">
                Pesan Sekarang
            </a>

        </div>

    </div>


    <div class="menu-card">

        <img
            src="assets/bear.png"
            alt="Bear Keychain"
        >

        <div class="menu-card-content">

            <span>Clay Keychain</span>

            <h3>Bear Keychain</h3>

            <p>
                Gantungan kunci clay berbentuk bear
                yang cocok untuk tas atau pouch.
            </p>

            <strong>Rp18.000</strong>

            <a href="#contact">
                Pesan Sekarang
            </a>

        </div>

    </div>


    <div class="menu-card">

        <img
            src="assets/flower.png"
            alt="Flower Keychain"
        >

        <div class="menu-card-content">

            <span>Clay Keychain</span>

            <h3>Flower Keychain</h3>

            <p>
                Gantungan kunci clay berbentuk bunga
                dengan warna yang manis.
            </p>

            <strong>Rp15.000</strong>

            <a href="#contact">
                Pesan Sekarang
            </a>

        </div>

    </div>

`;
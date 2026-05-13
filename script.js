
const products = [
    { id: 1, name: "Soft Berem", category: "kazak", isBestSeller: true, desc: "El emeği, terletmeyen yumuşak doku.", price: "350 TL", img: "img/1.jpg" },
    { id: 2, name: "Turuncu Neşe", category: "kazak", isBestSeller: true, desc: "Sıcak tutan örgü tasarım.", price: "400 TL", img: "img/2.jpg" },
    { id: 3, name: "Mor Düşler Kazak", category: "kazak", isBestSeller: false,  desc: "Huzurlu renklerle örüldü.", price: "850 TL", img: "img/3.jpg" },
    { id: 4, name: "Gri Bulut Hırka",  category: "kazak", isBestSeller: false,  desc: "Yumuşacık dokusuyla her mevsim.", price: "900 TL", img: "img/4.jpg" },
    { id: 5, name: "Ay Işığı Atkı", category: "kazak", isBestSeller: false, desc: "Gece şıklığı ve sıcaklık bir arada.", price: "300 TL", img: "img/5.jpg" },
    { id: 6, name: "Yıldız Tozu Peluş", category: "kazak", isBestSeller: true,  desc: "Çocuklar ve içindeki çocuk kalanlar için.", price: "450 TL", img: "img/6.jpg" },
    { id: 7, name: "Soft Örgü Set", category: "kazak", isBestSeller: true, desc: "Uyumlu renklerin birleşimi.", price: "1200 TL", img: "img/7.jpg" },
    { id: 8, name: "Gece Mavisi Şapka", category: "kazak", isBestSeller: true, desc: "Tarzınızı yansıtan detaylar.", price: "350 TL", img: "img/8.jpg" },
    { id: 9, name: "Hardal Esintisi", category: "kazak", isBestSeller: true, desc: "Farklı dokular sevenler için.", price: "380 TL", img: "img/9.jpg" },
    { id:10, name: "Beyaz Kısa Şapka",category: "şapka", isBestSeller: false, desc:"ayıcık tatlı kulakları içinizi ısıtır.", price:"500 TL", img:"img/11.jpg"},

    { id: 11, name: "Soft Berem",category: "şapka", isBestSeller: false, desc: "El emeği, terletmeyen yumuşak doku.", price: "350 TL", img: "img/22.jpg" },
    { id: 12, name: "Turuncu Neşe",category: "şapka", isBestSeller: true,  desc: "Sıcak tutan örgü tasarım.", price: "400 TL", img: "img/33.jpg" },
    { id: 13, name: "Mor Düşler Kazak",category: "şapka", isBestSeller: true, desc: "Huzurlu renklerle örüldü.", price: "850 TL", img: "img/44.jpg" },
    { id: 14, name: "Gri Bulut Hırka",category: "şapka", isBestSeller: true, desc: "Yumuşacık dokusuyla her mevsim.", price: "900 TL", img: "img/55.jpg" },
    { id: 15, name: "Ay Işığı Atkı", category: "şapka", isBestSeller: true, desc: "Gece şıklığı ve sıcaklık bir arada.", price: "300 TL", img: "img/66.jpg" },
    { id: 16, name: "Yıldız Tozu Peluş",category: "şapka", isBestSeller: true, desc: "Çocuklar ve içindeki çocuk kalanlar için.", price: "450 TL", img: "img/77.jpg" },
    { id: 17, name: "Soft Örgü Set", category: "şapka", isBestSeller: true, desc: "Uyumlu renklerin birleşimi.", price: "1200 TL", img: "img/88.jpg" },
    { id: 18, name: "Gece Mavisi Şapka",category: "peluş", isBestSeller: true, desc: "Tarzınızı yansıtan detaylar.", price: "350 TL", img: "img/111.jpg" },

    { id: 19, name: "Hardal Esintisi",category: "peluş", isBestSeller: true, desc: "Farklı dokular sevenler için.", price: "380 TL", img: "img/222.jpg" },
    { id: 20, name: "Beyaz Kısa Şapka",category: "peluş", isBestSeller: true, desc:"ayıcık tatlı kulakları içinizi ısıtır.", price:"500 TL", img:"img/333.jpg"},
    { id: 21, name: "Soft Berem",category: "peluş", isBestSeller: true, desc: "El emeği, terletmeyen yumuşak doku.", price: "350 TL", img: "img/444.jpg" },
    { id: 22, name: "Turuncu Neşe",category: "peluş", isBestSeller: true, desc: "Sıcak tutan örgü tasarım.", price: "400 TL", img: "img/555.jpg" },
    { id: 23, name: "Mor Düşler Kazak",category: "peluş", isBestSeller: true, desc: "Huzurlu renklerle örüldü.", price: "850 TL", img: "img/666.jpg" },
    { id: 24, name: "Gri Bulut Hırka",category: "peluş", isBestSeller: false, desc: "Yumuşacık dokusuyla her mevsim.", price: "900 TL", img: "img/777.jpg" },
    { id: 25, name: "Ay Işığı Atkı",category: "peluş", isBestSeller: false , desc: "Gece şıklığı ve sıcaklık bir arada.", price: "300 TL", img: "img/888.jpg" }
];

function filterProducts(category) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ""; 

    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase().includes(category.replace('-', ' '))) {
            btn.classList.add('active');
        }
    });

    products.forEach(product => {
        let show = false;
        if (category === 'tümü') show = true;
        else if (category === 'en-cok-satanlar' && product.isBestSeller) show = true;
        else if (product.category === category) show = true;

        if (show) {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <div style="text-align:center; margin-top:10px;">
                    <h3 style="color:var(--soft-purple)">${product.name}</h3>
                    <p style="font-weight:700">${product.price}</p>
                </div>
            `;
            card.onclick = () => openModal(product);
            productList.appendChild(card);
        }
    });
}

window.onload = () => filterProducts('tümü');


const productList = document.getElementById('product-list');
const modal = document.getElementById('productModal');
const modalImg = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const modalWA = document.getElementById('modalWhatsApp');
const closeModal = document.querySelector('.close-modal');


function loadProducts() {
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <div style="text-align:center; margin-top:10px;">
                <h3 style="color:var(--soft-purple)">${product.name}</h3>
                <p style="font-weight:700">${product.price}</p>
            </div>
        `;
        card.onclick = () => openModal(product);
        productList.appendChild(card);
    });
}


function openModal(product) {
    modalImg.src = product.img;
    modalName.innerText = product.name;
    modalDesc.innerText = product.desc;
    modalPrice.innerText = product.price;

    const message = `Merhaba Ayliz! Moonlight sitemden "${product.name}" ürününü gördüm ve sipariş vermek istiyorum.`;
    modalWA.href = `https://wa.me/0256321?text=${encodeURIComponent(message)}`;

    modal.style.display = "block";
    document.body.style.overflow = "hidden"; 
}

closeModal.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = (e) => {
    if (e.target == modal) closeModal.onclick();
}

window.onload = loadProducts;

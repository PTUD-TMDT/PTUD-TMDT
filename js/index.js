let slide_index = 0
let slide_play = true
let slides = document.querySelectorAll('.slide')

hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlide()
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1

prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

// pause slide when hover slider

document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)

// enable slide when mouse leave out slider
document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)

// slider controll

document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide()
    showSlide()
})

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide()
    showSlide()
})

showSlide()

// setInterval(() => {
//     if (!slide_play) return
//     nextSlide()
//     showSlide()
// }, 3000);

// render products

let products = [
    {
        name: 'Đồ Đá Bóng Đội Tuyển Nhật',
        image1: './images/2. Đá bóng.jpg',
        image2: './images/2.1. Đá bóng.jpg',
        old_price: '120.000 VND',
        curr_price: '99.000 VND'
    },
    {
        name: 'Đồ Bóng Rổ Thang Long',
        image1: './images/7. BR.jpg',
        image2: './images/7.1. BR.jpg',
        old_price: '180.000 VND',
        curr_price: '100.000 VND'
    },
    {
        name: 'Đồ Bóng Rổ Hanoi',
        image1: './images/8. BR.jpg',
        image2: './images/8.1. BR.jpg',
        old_price: '180.000 VND',
        curr_price: '100.000 VND'
    },
    {
        name: 'Áo Polo Tennis Actee',
        image1: './images/10. Tennis.jpg',
        image2: './images/10.1. Tennis.jpg',
        old_price: '499.000 VND',
        curr_price: '419.000 VND'
    },
    {
        name: 'Áo Cầu Lông Yonex',
        image1: './images/13. Cầu lông.jpg',
        image2: './images/13.1 Cầu lông.jpg',
        old_price: '169.000 VND',
        curr_price: '150.000 VND'
    },
    {
        name: 'Đồ Bơi Nam Ylike',
        image1: './images/17. Bơi.jpg',
        image2: './images/17.1. Bơi.jpg',
        old_price: '185.000 VND',
        curr_price: '155.000 VND'
    },
    {
        name: 'Áo Khoác Esport 2023 LPL',
        image1: './images/14. Esport.jpg',
        image2: './images/14.1.Esport.jpg',
        old_price: '297.000 VND',
        curr_price: '237.000 VND'
    },
]

let product_list = document.querySelector('#latest-products')
let best_product_list = document.querySelector('#best-products')

products.forEach(e => {
    let prod = `
        <div class="col-3 col-md-6 col-sm-12">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <button class="btn-flat btn-hover btn-shop-now">xem ngay</button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                        ${e.name}
                    </div>
                    <div class="product-card-price">
                        <span><del>${e.old_price}</del></span>
                        <span class="curr-price">${e.curr_price}</span>
                    </div>
                </div>
            </div>
        </div>
    `

    product_list.insertAdjacentHTML("beforeend", prod)
    best_product_list.insertAdjacentHTML("afterbegin", prod)
})



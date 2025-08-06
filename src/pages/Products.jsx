import product1 from '../assets/img/product-1.png'
import product2 from '../assets/img/product-2.png'
import product3 from '../assets/img/product-3.png'
import product4 from '../assets/img/product-4.png'
import product5 from '../assets/img/product-5.png'

const productsList = [
    { name: 'Vegeterian', price: '$15', img: product1 },
    { name: 'Pepperoni', price: '$10', img: product2 },
    { name: 'Margherita', price: '$12', img: product3 },
    { name: 'Mushroom', price: '$17', img: product4 },
    { name: 'Italian', price: '$10', img: product5 },
]
const Products = () => {
    return (
        <section id='products' className='py-10 bg-bg-primary'>
            <div className="w-[320px] px-5 mx-auto sm:w-[640px] lg:w-[1024px]">
                <p className="section-title text-center">The Most <br />Devoured Pizza</p>

                <div className="mt-40 grid gap-x-5 gap-y-15 grid-cols-2 sm:gap-x-10 sm:gap-y-25  lg:grid-cols-3 lg:gap-y-35">
                    {productsList.map(list => (
                        <div key={list.name} className="relative group rounded-3xl bg-bg-secondary p-5 pt-10  sm:pt-15 lg:pt-20">
                            <img src={list.img} alt={list.name} className='transition-transform duration-200 group-hover:-translate-y-2 absolute w-25 left-1/2 -translate-x-1/2 -top-10 sm:-top-20 lg:-top-25 sm:w-40 lg:w-50' />
                            <div className="mt-5">
                                <p className="text-xl font-bold text-center italic sm:text-2xl lg:text-3xl">
                                    {list.name} <br />Pizza
                                </p>
                                <p className="text-center mt-3 text-primary font-extrabold text-lg sm:text-xl lg:text-2xl">
                                    {list.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products
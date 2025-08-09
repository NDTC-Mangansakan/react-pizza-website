import IngredientsImg from '../assets/img/recipe-img.png'
import IngFlour from '../assets/img/recipe-flour.png'
import IngCheese from '../assets/img/recipe-cheese.png'
import IngTomato from '../assets/img/recipe-tomato.png'
import IngSauces from '../assets/img/recipe-sauces.png'
import IngMeat from '../assets/img/recipe-meat.png'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const ingredientsList = [
    { name: 'Flour', data: 'The best wheat from the field for the best flour.', img: IngFlour },
    { name: 'Cheese', data: 'Indulge in Cheese for a better future.', img: IngCheese },
    { name: 'Sauces', data: 'Add a touch of salsa to your life and it will taste better.', img: IngTomato },
    { name: 'Vegetables', data: 'Vegetables full of essence of nature and organic.', img: IngSauces },
    { name: 'Meats', data: 'The best fresh meats for your health.', img: IngMeat },
]

const Ingredients = () => {

    useGSAP(() => {
        gsap.from('#ing-data', {
            scrollTrigger: {
                trigger: '#ingredients',
                start: 'top 80%'
            },
            y: 50,
            opacity: 0,
            delay: .3,
            duration: 1
        })

        gsap.from('#ing-img', {
            scrollTrigger: {
                trigger: '#ingredients',
                start: 'top 80%',
            },
            y: -50,
            opacity: 0,
            delay: .3,
            duration: 1
        })
    }, [])
    return (
        <section id="ingredients" className="py-10">
            <div className="px-5 max-w-5xl mx-auto">
                <p className="text-center section-title">Fresh And <br />Natural Ingredients</p>

                <div  className="mt-10 flex flex-col lg:flex-row items-center justify-center gap-10">
                    <div id='ing-data' className="flex flex-col gap-10 lg:w-1/2">
                        {ingredientsList.map((list) => (
                            <div key={list.data} className="flex items-start gap-4">
                                <img src={list.img} alt={list.name} className="w-15" />
                                <div className="flex flex-col">
                                    <p className="font-bold text-xl">{list.name}</p>
                                    <p className="text-sm sub-text">{list.data}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div id='ing-img' className="lg:w-1/2">
                        <img src={IngredientsImg} alt="Ingredients Main Image" className='w-120' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ingredients

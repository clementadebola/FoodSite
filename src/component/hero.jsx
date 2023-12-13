import '../styles/hero.css'
import image from '../Asset/man with food.jpg'
import food1 from '../Asset/Food1.jpg'
import food2 from '../Asset/Food2.jpg'
import food3 from '../Asset/Food3.jpg'

const Hero = () => {
    // const foodApi = () => {
    //     axios.get('https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser'),
    //     params: {
    //         'nutrition-type': 'cooking',
    //         'category[0]': 'generic-foods',
    //         'health[0]': 'alcohol-free'
    //       },
    //       headers: {
    //         'X-RapidAPI-Key': '479cf6ed3cmsh56041a3d452f0a9p16a411jsn1f7954af8912',
    //         'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
    //       }

    // }

    return ( 
        <div className="main"> 
       <div className='hero'> 
            <div className="left">
            <h2>Foodie Store</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi facere atque nobis. Officia impedit doloribus ab, reprehenderit assumenda asperiores nesciunt id veritatis distinctio sed cumque autem. Commodi cupiditate quas qui?</p>
            </div>
            <div className="right">
                <img src={image} alt="" />
            </div>
            </div>

            <section className='food-wrapper'>
                {/* <div>
                <h3>Food Items</h3>
                </div> */}
                
                <div className='food-items'>
                    <img src={food1} alt="food1" />
                    <div className='item-cont'>
                        <h2>Cocktails meal</h2>
                    <p>i'm a baby woke milksilk wolf bitters live-edge blue bottle, hambugger freegan copper mug whatsever cold-pressed</p>
                    <span>$100</span>
                    </div>
                </div>
                <div className='food-items'>
                    <img src={food2} alt="food2" />
                    <div className='item-cont'>
                        <h2>Cocktails meal</h2>
                    <p>i'm a baby woke milksilk wolf bitters live-edge blue bottle, hambugger freegan copper mug whatsever cold-pressed</p>
                    <span>$100</span>
                    </div>
                </div>
                <div className='food-items'>
                    <img src={food3} alt="food3" />
                    <div className='item-cont'>
                        <h2>Cocktails meal</h2>
                    <p>i'm a baby woke milksilk wolf bitters live-edge blue bottle, hambugger freegan copper mug whatsever cold-pressed</p>
                    <span>$100</span>
                    </div>
                </div>
                <div className='food-items'>
                    <img src={food2} alt="food2" />
                    <div className='item-cont'>
                        <h2>Cocktails meal</h2>
                    <p>i'm a baby woke milksilk wolf bitters live-edge blue bottle, hambugger freegan copper mug whatsever cold-pressed</p>
                    <span>$100</span>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Hero;
import { imgClass } from "../../utils";

const Boking = () => {
 return (

     <section className="section__container class__container">

        <div className="class__image">
            <span className="bg__blur" />
            {imgClass.map((item)=>
             <img key={item.no} src={item.image} alt="class" className={item.class} />
            )}
            <img src="assets/class-2.jpg" alt="class" className="class__img-2" />
        </div>

        <div className="class__content">
            <h2 className="section__header">THE CLASS YOU WILL GET HERE</h2>
            <p>
            Led by our team of expert and motivational instructors, "The Class You
            Will Get Here" is a high-energy, results-driven session that combines
            a perfect blend of cardio, strength training, and functional
            exercises. Each class is carefully curated to keep you engaged and
            challenged, ensuring you never hit a plateau in your fitness
            endeavors.
            </p>
            <button className="btn">Book A Class</button>
        </div>
     </section>

 )
}

export default Boking;
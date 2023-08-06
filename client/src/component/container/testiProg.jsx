import { imageMember } from "../../utils"

const Testimony = () => {
    return (
        <section className="review">
        <div className="section__container review__container">
            <span><i className="ri-double-quotes-r" /></span>
            <div className="review__content">
            <h4>MEMBER REVIEW</h4>
            <p>
                What truly sets this gym apart is their expert team of trainers. The
                trainers are knowledgeable, approachable, and genuinely invested in
                helping members achieve their fitness goals. They take the time to
                understand individual needs and create personalized workout plans,
                ensuring maximum results and safety.
            </p>
            <div className="review__rating">
                <span><i className="ri-star-fill" /></span>
                <span><i className="ri-star-fill" /></span>
                <span><i className="ri-star-fill" /></span>
                <span><i className="ri-star-fill" /></span>
                <span><i className="ri-star-half-fill" /></span>
            </div>
            <div className="review__footer">
                <div className="review__member">
                <img src={imageMember} alt="member" />
                <div className="review__member__details">
                    <h4>Hanifama</h4>
                    <p>Software Engeener</p>
                </div>
                </div>
                <div className="review__nav">
                <span><i className="ri-arrow-left-line" /></span>
                <span><i className="ri-arrow-right-line" /></span>
                </div>
            </div>
            </div>
        </div>
        </section>

    )
}

export default Testimony
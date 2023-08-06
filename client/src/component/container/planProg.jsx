const Plan = () => {
    return(
       <section className="section__container price__container">
        <h2 className="section__header">OUR PRICING PLAN</h2>
        <p className="section__subheader">
            Our pricing plan comes with various membership tiers, each tailored to
            cater to different preferences and fitness aspirations.
        </p>
        <div className="price__grid">
            <div className="price__card">
            <div className="price__card__content">
                <h4>Basic Plan</h4>
                <h3>$16</h3>
                <p>
                <i className="ri-checkbox-circle-line" />
                Smart workout plan
                </p>
                <p>
                <i className="ri-checkbox-circle-line" />
                At home workouts
                </p>
            </div>
            <button className="btn price__btn">Join Now</button>
            </div>
            <div className="price__card">
            <div className="price__card__content">
                <h4>Weekly Plan</h4>
                <h3>$25</h3>
                <p>
                <i className="ri-checkbox-circle-line" />
                PRO Gyms
                </p>
                <p>
                <i className="ri-checkbox-circle-line" />
                Smart workout plan
                </p>
                <p>
                <i className="ri-checkbox-circle-line" />
                At home workouts
                </p>
            </div>
            <button className="btn price__btn">Join Now</button>
            </div>
            <div className="price__card">
            <div className="price__card__content">
                <h4>Monthly Plan</h4>
                <h3>$45</h3>
                <p>
                <i className="ri-checkbox-circle-line" />
                ELITE Gyms &amp; Classes
                </p>
                <p>
                <i className="ri-checkbox-circle-line" />
                PRO Gyms
                </p>
                <p>
                <i className="ri-checkbox-circle-line" />
                Smart workout plan
                </p>
                <p>
                <i className="ri-checkbox-circle-line" />
                At home workouts
                </p>
                <p>
                <i className="ri-checkbox-circle-line" />
                Personal Training
                </p>
            </div>
            <button className="btn price__btn">Join Now</button>
            </div>
        </div>
       </section>

    )
}

export default Plan
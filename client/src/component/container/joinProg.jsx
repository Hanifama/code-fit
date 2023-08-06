import { 
    imgJoinClass,
    RiUserLine,
    RiVidiconFill,
    RiBuilding2Fill} from "../../utils";

const JoinedContent = () => {
    return (
      <section className="section__container join__container">
        <h2 className="section__header">WHY JOIN US ?</h2>
        <p className="section__subheader">
            Our diverse membership base creates a friendly and supportive
            atmosphere, where you can make friends and stay motivated.
        </p>
        <div className="join__image">
            <img src={imgJoinClass} alt="Join" />
            <div className="join__grid">
            <div className="join__card">
                <span><RiUserLine/></span>
                <div className="join__card__content">
                <h4>Personal Trainer</h4>
                <p>Unlock your potential with our expert Personal Trainers.</p>
                </div>
            </div>
            <div className="join__card">
                <span><RiVidiconFill /></span>
                <div className="join__card__content">
                <h4>Practice Sessions</h4>
                <p>Elevate your fitness with practice sessions.</p>
                </div>
            </div>
            <div className="join__card">
                <span><RiBuilding2Fill /></span>
                <div className="join__card__content">
                <h4>Good Management</h4>
                <p>Supportive management, for your fitness success.</p>
                </div>
            </div>
            </div>
        </div>
      </section>

    )
}

export default JoinedContent;
import {exploreCard, AiFillCaretRight, AiOutlineCaretLeft} from "../../utils/index";

const Program = () => {

    return (
        <section className="section__container explore__container" id="program">
            
            <div className="explore__header">
                <h2 className="section__header">EXPLORE OUR PROGRAM</h2>
                <div className="explore__nav">
                <span><AiOutlineCaretLeft/></span>
                <span><AiFillCaretRight/></span>
                </div>
            </div>
            <div className="explore__grid">
                {
                    exploreCard.map((item) =>
                    <div className="explore__card"  key={item.id}>
                    <span>{item.icon}</span>
                    <h4>{item.title}</h4>
                    <p>
                        {item.note}
                    </p>
                    <a href="#">{item.button}<i className="ri-arrow-right-line" /></a>
                    </div>            
                    )
                }
               
            </div>
        </section>

    )
}

export default Program;

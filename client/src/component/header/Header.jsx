import { imgHeader } from "../../utils";

const Header = () => {
    return(
        <header className="section__container header__container" id="header">
         <div className="header__content">
            <span className="bg__blur" />
            <span className="bg__blur header__blur" />
            <h4>TIDAK ADA HASIL UNTUK USAHA</h4>
            <h1><span>BUAT</span> BENTUK TUBUH ANDA</h1>
            <p>
             Latihan adalah kebiasaan yang menyenangkan, bukan beban yang menyiksa.
             Bergabunglah dengan klub kebugaran kami sekarang dan temukan keajaiban perubahan dalam hidup Anda! 
             Jangan ragu lagi, kami akan membantu Anda mencapai tujuan kebugaran Anda.
            </p>
             <button className="btn">Get Started</button>
            </div>
            <div className="header__image">
             <img src={imgHeader} alt="header" />
            </div>
        </header>

    )
}

export default Header;
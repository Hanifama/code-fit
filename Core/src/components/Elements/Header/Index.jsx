import Button from "../Button/Index"

const Header = () => {
    return(
        <header class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="header">
        <div class="grid grid-cols-1 sm:grid-cols-2 items-center gap-8 pt-8">
            <div class="sm:pl-8 ">
                <h4 class="mb-4 text-secondary font-semibold text-lg">TIDAK ADA HASIL UNTUK USAHA</h4>
                <h1 class="mb-4 text-white text-5xl font-bold leading-tight">
                    <span class="text-stroke">BUAT</span> BENTUK TUBUH ANDA
                </h1>
                <p class="mb-8 text-text-light"> 
                    Latihan adalah kebiasaan yang menyenangkan, bukan beban yang menyiksa.
                    Bergabunglah dengan klub kebugaran kami sekarang dan temukan keajaiban perubahan dalam hidup Anda!
                    Jangan ragu lagi, kami akan membantu Anda mencapai tujuan kebugaran Anda.
                </p>
                <Button
                variant= "bg-secondary-dark"
                toLink = "/login"  
                >
                Get Started
                </Button>
            </div>
            <div class="relative">
                <span class="absolute top-0 left-1/2 transform -translate-x-1/2">
                    <span class="text-secondary text-9xl font-normal opacity-10">o</span>
                </span>
                <img src="../public/img/header.png" alt="header" class=" mx-auto max-h-[25rem]" />
            </div>
        </div>
    </header>
    )
}

export default Header
import Image from "next/image";

function getImageUrl() {
    return "/CarLogo.png";
}

const Banner = () => { 
    return ( 
        <header>
            <div>
                <Image 
                    src={getImageUrl()} 
                    alt="global logo"
                    width={500}
                    height={500}
                />
            </div>
            <h1>
                Provider amazing cars for you!
            </h1>
        </header>
    );
}

export default Banner;
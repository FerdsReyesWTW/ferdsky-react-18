import style from "./banner.module.css";

const Banner = () => { 
    return ( 
        <header className="row mb-4">
            <div className="col-5">
                <img className={style.logo} src="./CarLogo.png" alt="car logo" />
            </div>
            <h1 className="col-7">Provider amazing cars for you!</h1>
        </header>
    );
}

export default Banner;
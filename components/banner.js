import style from "./banner.module.css";

const subTitleStyle = {
    fontStyle: "italic",
    fontSize: "x-large",
}

const Banner = ({children}) => { 
    return ( 
        <header className="row mb-4">
            <div className="col-5">
                <img className={style.logo} src="./CarLogo.png" alt="car logo" />
            </div>
            <h1 className="col-7 mt-5" style={subTitleStyle}>{children}</h1>
        </header>
    );
}

export default Banner;
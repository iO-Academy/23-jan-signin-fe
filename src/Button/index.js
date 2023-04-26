import './styles.css'

const Button = ({buttonText}) => {


    return (
        <>
        {/*<button className="rounded-lg bg-primary text-6xl h-24 px-6">{buttonText}</button>*/}
    <button className="bg-black text-white px-10 py-5 text-xl tracking-widest hover:bg-white hover:text-black rounded">{buttonText}</button>
            </>
    )
}

export default Button;

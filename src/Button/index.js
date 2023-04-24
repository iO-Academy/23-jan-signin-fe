import './styles.css'

const Button = ({buttonText}) => {

    return (
        <button className="rounded-lg bg-primary text-6xl h-24 px-6">{buttonText}</button>
    )
}

export default Button;

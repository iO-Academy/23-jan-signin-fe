import './styles.css'

const Header = ({headerText}) => {

    return (
        <h1 className="pt-36 pb-16 text-9xl flex justify-center">{headerText}</h1>
    )
}

export default Header;
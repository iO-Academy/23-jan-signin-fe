import Button from "../Button";
import Header from "../Header";

const LandingPage = () => {

    return (
        <section >
            <Header headerText="Woodchuck Office"/>
            <div className="px-64 flex justify-between">
                <Button buttonText="Sign In"/>
                <Button buttonText="Sign Out"/>
            </div>
            <footer className="py-64 px-10 flex justify-end">
            <Button buttonText="Admin Login"/>
            </footer>
        </section>
    )
}

export default LandingPage;

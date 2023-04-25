import './App.css';

function App() {
  return (
    <div className="container">
        <WoodchuckOfficeMain />
        <AdminLoginButton />

    </div>
  );
}

function WoodchuckOfficeMain(){
    return(
        <section className="flex flex-wrap h-screen justify-center items-center">
            <div className="w-8/12">


                <div className="w-full p-10 text-center shadow-lg bg-gray-100">
                    <div className="text-xl font-large text-black">Woodchuck Office</div>
                </div>
                <div className="flex justify-between mt-5">
                    <SignInButton />
                    <SignOutButton />
                </div>
            </div>
        </section>
    )
}

function SignInButtonContainer() {
    return (
        <div className="container">
             <SignInButton />
        </div>
    );
}

function SignInButton() {
    return(

            <button className="bg-black text-white px-10 py-5 text-xl tracking-widest hover:bg-white hover:text-black rounded">Sign In</button>

    )
}

function SignOutButton() {
    return (
        <button className="bg-black text-white px-10 py-5 text-xl tracking-widest hover:bg-white hover:text-black rounded">Sign Out</button>
    )
}

function AdminLoginButton() {
    return (
        <button className="fixed right-10 bottom-10 bg-black text-white px-10 py-5 text-xl tracking-widest hover:bg-white hover:text-black rounded">Admin Login</button>
    )
}


export default App;

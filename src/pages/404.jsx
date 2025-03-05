import Application from "../components/Application";

const PageNotFound = () => {
    return (
        <Application currentRoute={"/404"} pageTitle={"Page Not Found"}>

            <div className="page-not-found" >
                <h1>404</h1>
                <h3>Page Not Found</h3>
            </div>

        </Application>
    );
};

export default PageNotFound;

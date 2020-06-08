import React from "react";
import InstallationsList from "./components/InstallationsList";

function App() {
    return (
        <div className="container">
            <form className="p-3 m-3">
                <div className="col-12 text-info m-3 text-center">
                    DLS Web Client
                </div>
                <div className="form-row col-12 m-3">
                    <div className="col-3">Installation:</div>
                    <div className="col-9">
                        <InstallationsList />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default App;

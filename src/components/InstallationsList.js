import React from "react";
import { useRef, useEffect } from "react";
import { loadInstallationsAsync } from "../actions/installations/installationActions";
import { connect } from "react-redux";
import { SELECT_INSTALLATION } from "../store/actionTypes";

const InstallationsList = (props) => {
    const {
        availableInstallations,
        loadInstallations,
        selectInstallation,
    } = props;

    const isFirstRun = useRef(true);
    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            loadInstallations();
        }

        console.log("Effect was run");
    });

    var content = <div>Please wait</div>;

    if (availableInstallations != null && availableInstallations.length) {
        content = (
            <select
                className="form-control"
                onChange={(e) => selectInstallation(e.target.value)}
            >
                <option value="">Please select...</option>
                {availableInstallations.map((dls) => (
                    <option key={dls.Code} value={dls.url + ":" + dls.Port}>
                        {dls.Name}
                    </option>
                ))}
            </select>
        );
    }

    return (
        <div className="mr-3 container-sm ">
            <div className="form-group">{content}</div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        availableInstallations: state.availableInstallations,
        installation: state.installation,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadInstallations: () => dispatch(loadInstallationsAsync()),
        selectInstallation: (value) =>
            dispatch({ type: SELECT_INSTALLATION, payload: value }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InstallationsList);

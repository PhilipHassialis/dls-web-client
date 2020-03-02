import React from "react";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function InstallationsList() {
	const [installations, setInstallations] = useState(null);

	const isFirstRun = useRef(true);
	useEffect(() => {
		if (isFirstRun.current) {
			isFirstRun.current = false;
			// fetch("http://192.168.0.160:39005/installations", {
			// 	method: "post",
			// 	mode: "no-cors"
			// }).then(data => console.log(data));
			axios
				.post("http://192.168.0.160:39005/installations", {
					Allowcrossdomain: true
				})
				.then(
					response => {
						console.log(response.data.Data);
						setInstallations(response.data.Data);
					},
					error => {
						console.log(error);
					}
				);
			return;
		}

		console.log("Effect was run");
	});

	var content = <div>Please wait</div>;

	if (installations != null) {
		content = (
			<select className="form-control">
				<option value="">Please select...</option>
				{installations.map(dls => (
					<option key={dls.Code} value={dls.url+":"+dls.Port}>
						{dls.Name}
					</option>
				))}
			</select>
		);
	}

	return (
		<div className="mr-3 container-sm ">
			<form>
				<div className="form-group">{content}</div>
			</form>
		</div>
	);
}

import PropTypes from "prop-types";
import React from "react";
import { Group } from "./Group";
import "./style.css";

export const GroupWrapper = ({ className, text = "User name", groupText = "Enter your user name" }) => {
    return (
        <div className={`group-wrapper ${className}`}>
            <div className="user-name">{text}</div>
            <Group className="group-20" enterYourUserNameClassName="group-instance" text={groupText} />
        </div>
    );
};

GroupWrapper.propTypes = {
    text: PropTypes.string,
    groupText: PropTypes.string,
};

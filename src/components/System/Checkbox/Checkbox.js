import React, {useState} from "react";
import {Icon, IconDiv, SCheckbox, SMark} from "./styles";

const Checkbox = ({ id, label, checked, ...props }) => {
    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);

    return (
        <SCheckbox>
            <label>
                <input
                    id={id}
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked((prev) => !prev)}
                    {...props}
                />
                <SMark>
                    <Icon viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                    </Icon>
                </SMark>
                <span>{label}</span>
            </label>
        </SCheckbox>
    );
};

export default Checkbox;
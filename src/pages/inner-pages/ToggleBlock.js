import React from "react";
import {SComponentCage, SHeader, SSizeControl} from "../../components/Layout/styles";
import Toggle from "react-toggle";
import styles from "../../components/System/Toggle/toggleStyle.css"

const ToggleBlock = () => {
    return (
        <>
            <SHeader>
                <h5>Components</h5>
                <h1>Toggle</h1>
                <p>Displays a boolean value.</p>
            </SHeader>

            <SComponentCage>
                <SSizeControl>
                    <label>
                        <Toggle style={styles}
                            icons={false}
                        />
                    </label>
                </SSizeControl>
            </SComponentCage>

            <SComponentCage>
                <SSizeControl>
                    <label>
                        <Toggle style={styles}
                                icons={false}
                        />
                        <div className="text-group">
                            <span className="label-title">Title</span>
                            <p className="label-description">Description text here</p>
                        </div>
                    </label>
                </SSizeControl>
            </SComponentCage>

        </>
    );


};

export default ToggleBlock;
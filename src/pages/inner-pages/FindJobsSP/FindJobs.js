import React from "react";
import {useHistory} from "react-router-dom";
import {
    SBackButton, SCardsBlock, SDetailsAboveFilter, SFindJobsContent, SJobsFound
} from "./styles";
import Menu from "../../../components/System/Menu/Menu";
import Filter from "../../../components/System/Filter/Filter";
import buttonBg from "../../../assets/img/buttonBg.jpg";
import inputBg from "../../../assets/img/inputBg.jpg";
import alertBg from "../../../assets/img/alertBg.webp";
import selectBg from "../../../assets/img/selectBg.jpg";
import checkboxBg from "../../../assets/img/checkboxBg.jpg";
import labelBg from "../../../assets/img/labelBg.jpg";
import toggleBg from "../../../assets/img/toggleBg.jpg";
import tabsBg from "../../../assets/img/tabsBg.jpg";
import NavCard from "../../../components/System/NavCard";
import JobCard from "../../../components/System/JobCard/JobCard";
import Rainbow from "../../../assets/icons/Rainbow";


const FindJobs = () => {
    let history = useHistory();

    const cardArray = [
        {
            id: 1,
            title: "First Officer (PIC)",
        },
        {
            id: 2,
            title: "Cabin Attendant",
        },
        {
            id: 3,
            title: "Dispatch",
        },

    ];

    return (
        <>
            <SBackButton onClick={() => history.push("/pages")}>Back</SBackButton>
            <Menu />
            <SFindJobsContent>
                <Filter />
                <SCardsBlock>
                    <SDetailsAboveFilter>
                        <SJobsFound>
                            <Rainbow />
                            <p>120  jobs found</p>
                        </SJobsFound>
                    </SDetailsAboveFilter>

                    {cardArray.map((card) => (
                        <JobCard
                            key={card.id}
                            {...card}
                        />
                    ))}
                </SCardsBlock>
            </SFindJobsContent>
        </>


    );


};

export default FindJobs;
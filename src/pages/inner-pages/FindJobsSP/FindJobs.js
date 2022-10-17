import React from "react";
import {useHistory} from "react-router-dom";
import {
    SBackButton, SCardsBlock, SDetailsAboveFilter, SFindJobsContent, SJobsFound
} from "./styles";
import Menu from "../../../components/System/Menu/Menu";
import Filter from "../../../components/System/Filter/Filter";
import JobCard from "../../../components/System/JobCard/JobCard";
import Rainbow from "../../../assets/icons/Rainbow";
import {SDecorationBarBlue} from "../../../components/System/JobCard/styles";
import Input from "../../../components/System/Input/Input";
import SearchIcon from "../../../components/System/Search/Search";
import SingleSelect44 from "../../../components/System/Select/SingleSelect44";
import {SingleControl44} from "../../../components/System/Select/SingleControl44";


const FindJobs = () => {
    let history = useHistory();

    const cardArray = [
        {
            id: 1,
            title: "First Officer (PIC)",
            bar: <SDecorationBarBlue/>,
        },
        {
            id: 2,
            title: "Cabin Attendant",
            bar: <SDecorationBarBlue/>,
        },
        {
            id: 3,
            title: "Dispatch",
            bar: <SDecorationBarBlue/>,
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
                        <SearchIcon label="Search" />
                        <SingleSelect44 />
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
import React, { useState } from "react";
import HobbieItem from "../components/HobbieItem";


function Education() {
    const [isWorkTabSelected, setWorkTab] = useState(true);
    const [isEduTabSelected, setEduTab] = useState(false);
    const [isHobbieTabSelected, setHobbieTab] = useState(false);

    function showWorkTabContent() {
        if (!isWorkTabSelected === true) {
            setWorkTab(true)
            setEduTab(false)
            setHobbieTab(false)
        }
    }

    function showEduTabContent() {
        if (!isEduTabSelected === true) {
            setWorkTab(false)
            setEduTab(true)
            setHobbieTab(false)
        }
    }

    function showHobbieTabContent() {
        if (!isHobbieTabSelected === true) {
            setWorkTab(false)
            setEduTab(false)
            setHobbieTab(true)
        }
    }

    return (
        <div className="content">
            <h1>About me</h1>
            <div className="tabs">
                <button style={{ borderBottom: isWorkTabSelected && "#660000 2px solid" }} id="work-tab" className="tab-title" onClick={showWorkTabContent}>Work experience</button>
                <button style={{ borderBottom: isEduTabSelected && "#660000 2px solid" }} id="education-tab" className="tab-title" onClick={showEduTabContent}>Education</button>
                <button style={{ borderBottom: isHobbieTabSelected && "#660000 2px solid" }} id="hobbie-tab" className="tab-title" onClick={showHobbieTabContent}>Hobbies</button>
            </div>

            {isWorkTabSelected &&
                <div className="tab-content">
                    {/* Company 3 */}
                    <div className="work-container">
                        <h4>QA Specialist <span className="company-name">Newsflare Ltd</span>
                        </h4>
                        <p className="period">January 2020 - Novermber 2023 <span className="period-separator">|</span> Bulgaria</p>
                        <ul>
                            <li>Design, implementation and execution of a test cases</li>
                            <li>Reporting test progress and results</li>
                            <li>Evaluating the quality of a test object</li>
                            <li>Creating new automation tests and updating existing ones</li>
                            <li>Staying on the line between tech and product teams</li>
                        </ul>
                    </div>
                    {/* Company 2 */}
                    <div className="work-container">
                        <h4>System Administrator <span class="company-name">European Moving
                            Technologies</span></h4>
                        <p className="period">April 2019 - December 2020 <span
                            className="period-separator">|</span> Bulgaria</p>
                        <ul>
                            <li>Assist company employees in the introduction and maintenance of information and peripheral systems;</li>
                            <li>Administer and control user access to the database</li>
                            <li>Develop rules and instructions regarding the use of the database</li>
                            <li>Administer TCP / IP networks and services</li>
                            <li>Provide training for employees to work with software products</li>
                        </ul>
                    </div>
                    {/* Company 1 */}
                    <div className="work-container">
                        <h4>Internship <span className="company-name">Dyvosvit</span></h4>
                        <p className="period">January 2017 - June 2017 <span
                            className="period-separator">|</span> Ukraine</p>
                        <ul>
                            <li>Draw and implement designs and layouts of posters, flyers and logos of the company</li>
                            <li>Submit all the work before deadlines</li>
                        </ul>
                    </div>
                </div>
            }
            {isEduTabSelected &&
                <div className="tab-content">
                    {/* University 2 */}
                    <div className="education-container">
                        <h4 className="education-university">Technical University of Varna</h4>
                        <h4>Software Engineering</h4>
                        <p className="period">October 2021 - July 2023 <span
                            className="period-separator">|</span> Bulgaria <span
                                className="period-separator">|</span> Master's degree</p>
                    </div>
                    {/* University 1 */}
                    <div className="education-container">
                        <h4 className="education-university">Varna University of Management</h4>
                        <h4>Software Engineering</h4>
                        <p className="period">October 2017 - August 2020 <span
                            className="period-separator">|</span> Bulgaria <span
                                className="period-separator">|</span> Bachelor's degree</p>
                    </div>
                </div>
            }
            {isHobbieTabSelected &&
                <div className="tab-content">
                    <div className="hobbies-container">
                        <HobbieItem
                            imgURL="img/cat-gamer.jpg"
                            caption="Gamer(RPG, Action)"
                        />
                        <HobbieItem
                            imgURL="img/cat-youtube.jpg"
                            caption="YouTube"
                        />
                        <HobbieItem
                            imgURL="img/ballroom-dancing-cat.jpg"
                            caption="Ballroom dancer (in the past)"
                        />
                        <HobbieItem
                            imgURL="img/cat-yoga.jpeg"
                            caption="Yoga/Health care"
                        />
                    </div>
                    <p className="tiny-text">P.S. Yes, I LOVE cats.</p>
                </div>
            }
        </div>
    );
}

export default Education;

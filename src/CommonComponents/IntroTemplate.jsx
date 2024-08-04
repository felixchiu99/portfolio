import '../App.css';
import * as Status from '../ProjectStatus';
import React from "react";
import * as CommonComp from "../CommonComponents";

const GetStatus = (StatusType) => {
    if (StatusType === "Ongoing") {
        return <Status.Ongoing></Status.Ongoing>;
    }
    if (StatusType === "Completed") {
        return <Status.Completed></Status.Completed>;
    }
    if (StatusType === "Planning") {
        return <Status.Planning></Status.Planning>;
    }
    return <Status.Planning></Status.Planning>;
}

const IntroTemplate = ({ Info }) => {
    const Data = Info.Intro;
    return (
        (Data == null)
            ? null
            :
            <header className="Project">
                <h3>{Data.Title}</h3>
                <h4>Status: {Data.Status.Name ? Data.Status.Name + " - ":null}{GetStatus(Data.Status.Type)}</h4>
                <h5>Last update : {Data.LastUpdate}</h5>
                <div class="row">
                    <div class="column">
                        <div class="round">
                            <div>
                                <CommonComp.InfoDisplay Info={Info}></CommonComp.InfoDisplay>
                                <h4 class="description">
                                    Game Engine: {Data.GameEngine}
                                </h4>
                                {
                                    Data.CurrentFocus
                                        ? <h5 class="description">
                                            Current Focus: {Data.CurrentFocus}
                                        </h5>
                                        :null
                                }
                                {
                                    Data.TimeTaken
                                        ?
                                        <>
                                            <h5 class="description">
                                                Time Taken:
                                            </h5>
                                            <ul>
                                                {
                                                    Data.TimeTaken.map((data) => {
                                                        return (
                                                            <li>{data}</li>
                                                        );
                                                    })
                                                }
                                            </ul>
                                        </>
                                        : null
                                }
                                {
                                    Data.Description.map((data) => {
                                        return (
                                            <p class="description">{data}</p>
                                        );
                                    })
                                }

                                <p class="description">
                                    More in detail page.
                                </p>

                                <br></br>

                                <a href={Data.UrlReadMore.Link} class="description">
                                    <button class="button">{Data.UrlReadMore.Label}</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="column" >
                        <div class="round" style={{ background: "white", color: "black" }}>
                            <h4>Latest Clips</h4>
                            <h4>{Data.Video.Title}</h4>

                            <div style={{ width: "100%", "padding-right": "1%", float: "Left" }}>
                                {
                                    Data.Video.VideoDetail.map((data) => {
                                        return (
                                            <>
                                                <CommonComp.YoutubeEmbed embedId={data.Link} />
                                                {data.Caption ? <p>{data.Caption}</p>:null}
                                            </>
                                        );
                                    })
                                }
                                <p>{Data.Video.Description}</p>
                            </div>

                            <div>
                                {
                                    Data.Links.Repository
                                        ?
                                        <a href={Data.Links.Repository.Link}>
                                            <button class="button">{Data.Links.Repository.Label}</button>
                                        </a>
                                        :
                                        null
                                }
                            
                            </div>
                            <div>
                                {
                                    Data.Links.ReleasePage
                                        ?
                                        <a href={Data.Links.ReleasePage.Link}>
                                            <button class="button">{Data.Links.ReleasePage.Label}</button>
                                        </a>
                                        :
                                        null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    );
}

export default IntroTemplate;
import '../../../Project.css';
import Collapsible from "../../../../Collapsible";
import React from 'react';

export default function Component() {
    return (
        <div>
            
            <h4 class="description" style={{ "padding-left": "0%", "padding-right": "6%" }}>Feel/Theme</h4>
            <p class="description" style={{ "padding-left": "0%", "padding-right": "6%" }}>
                There are several theme/feeling I want to the player to feel in this project. Here are some of it listed.
            </p>
            <ul class="description">
                <li>
                    <Collapsible title="A leaf in the wind">
                        <p>
                            As much as I hate promoting being powerless, this is something I want the game to initially feel like.
                            When Countries go to war, there is often not much you can do about it.
                            However, as the game progresses, I do want to give the player some wiggle room.
                            While we can't choose what situation we are in, how we respond is something we have the privilage to choose.
                            Should we serve the country directly, continue our old lifestyle and contribute passively,
                            or do shady business to get the better of both sides? 
                        </p>
                        <p>
                            That being said, I do think that there is a limit to how much a person can do in this game.
                            For example, while I plan to have a way for the player to affect government level policy,
                            the player would not be able directly setup plans for on the government level as it should take years to climb to that position. 
                        </p>
                        <p>
                            This is the feeling I want the player to feel when playing the game. Not sure if I can make it work, but I'll try.
                        </p>
                    </Collapsible>
                </li>
                <li>
                    <Collapsible title="Trade">
                        <p>
                            Trade/Logistic are an important aspect in a military conflict,
                            but I usually did not see it implemented well in a first-person game before.
                            Probably it is because in most cases, there isn't any need to do it.
                        </p>
                        <p>
                            However, considering how important supplies are in a conflict, I think it is worth to try including it in this game.
                        </p>
                        <p>
                            I want the player feel the importance of trade by having the price of repairs/goods/supply deeply linked with the possiblity of safe trades.
                            If the area is relative unsafe, then there will be less private trade and pushing prices up.
                        </p>
                        <p>
                            Hopefully the player can feel the pressure of keeping the region running in through Game mechanics alone.
                        </p>
                    </Collapsible>
                </li>
                <li>
                    <Collapsible title="Able to Adapt to environment">
                        <p>
                            With that much focus in the effect of the environment and having a limit on what one can do,
                            one way of giving empowerment to the player is to allow customisation for the airships.
                        </p>
                        <p>
                            Want to make your ship heavily armed to inflict massive damage to the opponent?
                            Want to maximise cargo space to increase profit margins?
                            Want to add specialist component to take on unique jobs?
                            As it is your ship, It should be all possible if the ship's design allows it.
                        </p>
                        <p>
                            Hopefully this gives the player some options in facing the challenge this game presents.
                        </p>
                    </Collapsible>
                </li>
            </ul>

        </div>
    );
}
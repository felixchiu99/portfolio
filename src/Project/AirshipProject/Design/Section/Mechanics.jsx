import '../../../Project.css';
import Collapsible from "../../../../Collapsible";
import React from 'react';

export default function Component() {
    return (
        <div>
            
            <h4 class="description" style={{ "padding-left": "0%", "padding-right": "6%" }}>Mechanics</h4>
            <p class="description" style={{ "padding-left": "0%", "padding-right": "6%" }}>
                Here are some Mechanic ideas I want to include in the game. Note that this is more like a wishlist rather than a concrete plan.
            </p>
            <ul class="description">
                <li>
                    <Collapsible title="Airships">
                        <p>
                            The airship should consist of three core parts, the balloon, the hull and the engines.
                        </p>
                        <p>
                            Each part should be able to have several upgrade/replacement for customisation.
                        </p>
                        <p>
                            The hull should also have ship customisation component so that the player can modify the behaviour/capability of the ship.
                        </p>
                        <p>
                            Ship components will be grouped into weapon mounts and functional mounts,
                            with the functional mounts being use for firing controls, cargo space, fleet command modules and other stuff needed.
                        </p>
                    </Collapsible>
                </li>
                <li>
                    <Collapsible title="Floating Islands">
                        <p>
                            A Island probably would have a limited upgrade slot for the shops or facilities.
                            It probably would have a small limit on most islands to keep exploration interesting.
                        </p>
                        <p>
                            While a trading post must be present in each island,
                            I do think i should introduce a staged system so that smaller "branches" are limited to what service they provide.
                            The smallest branch probably would only allow buy/sell trade goods, 
                            with larger branch providing banking, quest handling, and other extra functions.
                        </p>

                    </Collapsible>
                </li>
                <li>
                    <Collapsible title="Local/Regional Trade">
                        <p>
                            I think that each island should have a special demand and produce to make sure the player would have a reason to explore that area.
                            The demand would also spawn meaningful Resupply / Convoy escort quest to the game as there is actually gameplay reason to completing a quest.
                        </p>
                    </Collapsible>
                </li>
                <li>
                    <Collapsible title="Kingdoms">
                        <p>
                            I would like to simulate a country in this world,
                            with decisions such as expanding/cutting military fleet, investing in infrastructures,
                            increasing taxes, creating special supply fleet to islands, launching invasion fleet to island... etc. 
                        </p>
                        <p>
                            I don't want the player to feel overwhelmed so decisions probably happens once 30 mins in game and have less than 10 different decisions in the pool to choose from.
                        </p>
                    </Collapsible>
                </li>
            </ul>

        </div>
    );
}
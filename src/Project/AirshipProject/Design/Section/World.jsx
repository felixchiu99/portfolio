import '../../../Project.css';
import Collapsible from "../../../../Collapsible";
import React from 'react';

export default function Component() {
    return (
        <div>
            
            <h4 class="description" style={{ "padding-left": "0%", "padding-right": "6%" }}>World</h4>
            <p class="description" style={{ "padding-left": "0%", "padding-right": "6%" }}>
                I want the world to be a mix of steampunk and fantasy.
                i believe writing some thoughts down would help guide me in making a coherent experience later on.
            </p>
            <ul class="description">
                <li>
                    <Collapsible title="General Environment">
                        <p>
                            The world consist of some floating islands.
                        </p>
                        <p>
                            Beneath the islands is a cloud of poisonious dense gas,
                            which limits how low the player can go underneath the island and is the reason why the islands are floating in the sky.
                        </p>
                        <p>
                            Above a certain distance, the air is too thin for the balloon to provide lift so there is a limit to how high players can go.
                        </p>
                        <p>
                            Some "islands" are actually mountain tops and can sustain ore mining.
                        </p>
                    </Collapsible>
                </li>
                <li>
                    <Collapsible title="The map/world layout">
                        <p>
                            The world should have floating islands in the sky with regions that are dense with local islands,
                            and a relatively sparse space between each region.
                        </p>
                        

                    </Collapsible>
                </li>
                <li>
                    <Collapsible title="Economy">
                        <p>
                            With limited space, each island usually specialise in one trade.
                        </p>
                        <p>
                            Common goods are timber, food, water and ores.
                        </p>
                        <p>
                            Specialty items like tea, gems, silk etc. are also present and may be sought after in different regions.
                        </p>

                        <p>
                            With specialisation comes specific demands and thus overtime, each island will have different needs to be fulfilled.
                        </p>
                    </Collapsible>
                </li>
                <li>
                    <Collapsible title="Technology">
                        <p>
                            As the main transport are airships, Cannons are a common technology in the world for self defence.
                        </p>
                        <p>
                            Local transport are somewhat less developed as there is no need for good long distance travel,
                            so the best they have would be a horse drawn cart.
                        </p>
                        <p>
                            With "magic" being real, but require expensive equipment,
                            most of the world relies on manual or at best steampunk tech for technological progress,
                            and the most complex / expensive contraptions fulfilled by power gem tech.
                        </p>

                    </Collapsible>
                </li>
                <li>
                    <Collapsible title="Power Gem?">
                        <p>(Idea Needs refining)</p>
                        <p>
                            A special gem is obtained through "dungeon diving" where adventurers.
                            (Use for explaining advance tech/magic like game systems).
                        </p>
                        <p>
                            However, as this gem is quite hard to come by,
                            there is a reluctance to use it directly as a weapon/power source
                            and is usually reserved for complex systems.
                        </p>
                    </Collapsible>
                </li>
            </ul>

        </div>
    );
}
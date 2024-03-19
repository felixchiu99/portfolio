import '../../../Project.css';
import YoutubeEmbed from "../../../../YoutubeEmbed";
import Collapsible from "../../../../Collapsible";
import React from 'react';

export default function Component() {
    return (
        <div className="App">
            
            <h4 class="description" style={{ "padding-left": "0%", "padding-right": "6%" }}>
                Weapon Prototype
            </h4>
            <h5 class="description">Status: <strong style={{ "color": "darkseagreen" }}>Complete </strong> </h5>


            <div class="row">
                <div class="column">
                    <p class="description">I wanted to incorperate two Idea in the weapon system: Customisable and Expandable.</p>
                    <p class="description">
                        Customisable: As I wanted the weapons on the ship be somewhat customisable, as in we can pick which loadout on the mounts,
                        this is one of the thing I would focus on when thinking about new any weapon system.
                    </p>
                    <p class="description">
                        Expandable: As this is an early prototype,
                        I wanted to leave the system with a lot of room to expand, so only the most essential items are coded in at the moment.
                    </p>
                    <ul class="description">
                        <li>
                            <Collapsible title="Interchangeablity">
                                <p>
                                    The cannon was split into three core systems: the Turret, the Cannon and the projectile. Which should be easily converted in BPs/Extended for custom functions.
                                </p>
                                <p>
                                    The Turret deals with inputs, azimuth and elevation, it also stores a Cannon slot. Controlled by WASD and Left mouse button.
                                </p>
                                <p>
                                    The Cannon deals with firing animation, automatic fire mechanics and Storing Projectile types.
                                </p>
                                <p>
                                    The Projectile deals with the OnHit function, Explosion effect, and projectile flight characteristics.
                                </p>
                                <p>
                                    All three should be able to be change quite easily.
                                </p>
                                <Collapsible title="Self Comment:">
                                    <p>
                                        There are quite a lot of minor fixes I can thought of right now,
                                        for example, dynamically storing the number of cannons in the turret, Multiple projectile type, More slot types (large turret vs small MG mount).
                                        However, I think it is best to leave these work later and focus on creating more core systems before polishing on these.
                                    </p>
                                </Collapsible>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible title="Expandability">
                                <p>
                                    The SFX and VFX Should be easily changeable if needed.
                                </p>
                                <p>
                                    The entering and exiting of the cannon was based on an interface,
                                    meaning that it can be easily translated to other interactable objects.
                                </p>
                                <p>
                                    - The interactable object interface works like this:
                                    If a player is looking at the object within distances,
                                    the player controller will attempt to possess the interactable object.
                                    The interactable object will store the player character object and add the required input mapping to the controller.
                                    When the player "exits" the interactable object,
                                    the interface returns the stored controller object,
                                    teleports the player character to the exit point and then unpossess the interactable object,
                                    returning control to the player character.

                                </p>

                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible title="Limited Firing Arc">
                                <p>
                                    The Cannon is able to limit it's firing arc to mimic the limitations on an airship.
                                    However, this can be overrided in the BP for free rotating turrets. (Ground AA)
                                </p>
                                <p>
                                    This was done by having a clamp on the maximum relative rotation of the turret.
                                    A limit rotation boolean allows the rotation function to bypass the clamp if it was unchecked.
                                </p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible title="Auto Firing">
                                <p>
                                    The Cannon can be set to allow auto firing with a boolean.
                                </p>
                                <p>
                                    Made possible by a timer handle that will repeat itself unless told otherwise by the toggle boolean.
                                </p>
                            </Collapsible>
                        </li>
                    </ul>

                </div>
                <div class="column">
                    <div class="round">
                        <div class="round_video" style={{ background: "gray", color: "black", width: "75%", float: "Right" }}>
                            <div style={{ width: "100%", "padding-right": "1%", float: "Left" }}>
                                <YoutubeEmbed embedId="1BTy-twodkk" />
                                <p style={{ "text-align": "center", color: 'white' }}>Showcase of the current final weapon prototype</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h4 class="description" style={{ "padding-left": "0%", "padding-right": "6%" }}>
                Future Improvements
            </h4>
            <ul class="description">
                <li>
                    <Collapsible title="AI compatibility">
                        <p>
                            I did think that if there are multiple cannons in an airship,
                            it would become hard to utilise all of them if all you can control is one cannon.
                        </p>
                        <p>
                            That's where the Cannon AI comes in. The 
                            The system should be able to easily compatable with a firing AI and can be replaced by the player when interacting with the cannon.
                        </p>
                    </Collapsible>
                </li>
                <li>
                    <Collapsible title="Fire Control Unit compatibility">
                        <p>
                            Even with a Cannon AI controlling the Cannons, it will get messy in terms of targeting.
                            A focused barrage is better than scattered firing in most situation.
                            That's why I think it would be a good idea to implement a Fire Control Unit as an optional ship component.
                        </p>
                        <p>
                            I didn't put much thought into this other than it should be a universial target for a group of cannons and it would probably be all aiming for a "Location".
                            The location probably is determined by aiming the fire control unit,
                            but wheither it should auto lock on a target, or some arbitrary distance in the direction is still undecided.
                        </p>
                        <p>
                            I probably will experiment with this idea later on.
                        </p>
                    </Collapsible>
                </li>
                <li>
                    <Collapsible title="Accurracy setting">
                        <p>Currently the projectile will shoot straight without any variation, this should be quite easy to add.</p>
                    </Collapsible>
                </li>
                <li>
                    <Collapsible title="Ammo Count">
                        <p>It will be more realistic to have the cannon be limited with how much ammo they got.</p>
                    </Collapsible>
                </li>
                <li>
                    <Collapsible title="Barrel Shadow & Collision">
                        <p>
                            The current barrel has a animation for the recoil,
                            however, it seems to have some problem with the collision & shadow calculation.
                            From what I can tell, it is related to the skeletal mesh for the barrel mesh.
                            More testing will be needed here.
                        </p>
                    </Collapsible>
                </li>
                <li>
                    <Collapsible title="Performance & Optimisation Study">
                        <p>
                            I am not sure about the large scale performance for this kind of system. 
                            However, I kind of want to wait until the fire control and AI is completed before I continue.
                        </p>
                    </Collapsible>
                </li>
            </ul>
        </div>
    );
}
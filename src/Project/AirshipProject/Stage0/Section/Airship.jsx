import '../../../Project.css';
import YoutubeEmbed from "../../../../YoutubeEmbed";
import Collapsible from "../../../../Collapsible";
import * as Status from "../../../../ProjectStatus";
import React from 'react';

export default function Component() {
    return (
        <div className="App">
            
            <h4 class="description" style={{ "padding-left": "0%", "padding-right": "6%" }}>
                Airship Prototype
            </h4>
            <h5 class="description">Status: <Status.Completed></Status.Completed></h5>
            <h5>Last update : 2024-04-10</h5>

            <div class="row">
                <div class="column">
                    <p class="description">
                        The Airship is the key for this project, where the player should be staying for most of their time.
                        There are a few system/requirements I have made with this prototype
                    </p>
                    <ul class="description">
                        <li>
                            <Collapsible title="Design Thoughts">
                                <p>
                                    Prior to creating this prototype, I have thought of two ways of doing airship movement.
                                </p>
                                <h5>Physical</h5>
                                <p>
                                    A straight forward way of approaching this problem was to make the airship a physical object.
                                </p>
                                <p>
                                    This way, I only need to add the appropriate forces and torque to mimic the movement of an airship.
                                    With collisions handled by physics, it should be relatively easy to finished this prototype.
                                </p>
                                <p>
                                    A system will need to be worked on to deal with the Lift/Stablization problem.
                                </p>
                                <p>
                                    However, I read on some reddit thread about some difficulty later on with synchronization issues when implementing networked multiplayer.
                                </p>
                                <p>
                                    Performance might also be affected, but I guess I will investigate this later on.
                                </p>

                                <h5>Kinematic</h5>
                                <p>
                                    Alternatively, I could create a movement component that mimics the movement of the airship,
                                    but collisions will be need to deal with to "fake" the collision reaction,
                                    maybe it can be done convincingly with some animation,
                                    but with not much knowledge on that subject at the moment,
                                    I do not think it would be time efficient to approach this method right now.
                                </p>

                                <h5>Conclusion</h5>
                                <p>
                                    I decided to choose to go with the physical route.
                                </p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible title="Movement Implementation">
                                <h5>Lift</h5>
                                <p>
                                    This first problem to overcome was getting the airship floating.
                                    I first tried to set the gravity to zero but the effect wasn't good.
                                    With gravity set to zero but center of gravity (COG) not changing,
                                    the platform I used to test for movement could float,
                                    but as it does not have a righting force, the platform just spins when stepped on / tampered with.
                                </p>
                                <p>
                                    Thinking back for real life airships, their center of mass is usually lower than the center of lift,
                                    which provided a "righting rotation" if the airship is tilted.
                                    I implemmented this in the game so that each tick the airship will add a lifting force in the opposite direction to gravity.
                                    Now the plaform stays in a up right position even if I push the plaform or step on it.
                                </p>

                                <h5>Thrust Movement</h5>
                                <p>
                                    With the platform floating, I started to make the platform move.
                                    I first created a "vehicle controller" to gather inputs from the player.
                                    This is a ship component and will pass the user input to the Airship object.
                                </p>
                                <p>
                                    I coded so that the when the forward input (W/S) was press, A force will applied in the forward direction.
                                    To account for different controlling characteristic when going backwards, the backward thrust was set to 80%.
                                </p>
                                <p>
                                    For turning, I simply apply a torque on the airship balloon to simulate the turning effects from a balloon mounted rudder.
                                    To add more realism to the control,
                                    I have scale the applied torque with the forward velocity so that the airship will only turn when "air" is going through the rudder.
                                </p>
                                <h5>Air Resistance</h5>
                                <p>
                                    At this point, the ship has most of the forces figured out.
                                    However, one thing seems off. The ship encounters basically the same resistance whether heading forward for sideways.
                                    This was the intented effect for UE5's physics Linear Damping function,
                                    but is unsatifactory for an airship which has at least three axis of air resistance.
                                </p>
                                <p>
                                    I then coded a function to apply damping along local x,y,z Axis and applied that to the airship actor to simulate the effects of air resistance on an airship.
                                    The damping also scales up with the velocity of the ship so that a "Max Speed" will be acheived with a given thrust force.
                                </p>

                                <h5>Cancelling out normal Force from Player</h5>
                                <p>
                                    I noticed that the ship will slowly fall when a player is standing on it.
                                    As I have only cancelled the effects of gravity of the ship only, it was expected.
                                </p>
                                <p>
                                    My fix was to set a "target height". The ship will apply a corrective force in attempt to make the ship remain in the same height.
                                    The force will be larger if the ship sink further downwards, and as a result it will remain at the level.
                                </p>

                                <h5>Height Control</h5>
                                <p>
                                    The "target height" is also used with the height control.
                                    When "shift" is pressed , a upward force is applied and the target height is update. With "ctrl" being the opposite.
                                    The Upward force will diminish the higher it gets and will end at (current) 15000 unit.
                                </p>

                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible title="Mount / Ship Components">
                                <p>
                                    As mentioned above, I have created a sample of a ship components in the form of the ship's helm/controller.
                                    At this time, I haven't expanded on this system yet, but this can be expanded quite easily.
                                </p>  
                                <p>
                                    As this session involve customization, I want to get UI working before continuing onward.
                                </p> 
                            </Collapsible>
                        </li>
                    </ul>
                    

                </div>
                <div class="column">
                    <div class="round">
                        <div class="round_video" style={{ background: "gray", color: "black", width: "75%", float: "Right" }}>
                            <div style={{ width: "100%", "padding-right": "1%", float: "Left" }}>
                                <YoutubeEmbed embedId="GmV63ISOkik" />
                                <p style={{ "text-align": "center", color: 'white' }}>Showcase of the current Airship control/movement prototype</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
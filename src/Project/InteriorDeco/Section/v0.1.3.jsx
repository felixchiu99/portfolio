import '../../Project.css';
import * as CommonComp from "../../../CommonComponents";
import React from 'react';

export default function Component() {
    return (
        <header className="Project">
            <div className="App">
            
                <header className="Project">
                    <h2>InteriorDeco V0.1.3 Colour </h2>
                    <h5 class="description"> Updated : 2025-01-04 </h5>
                    <h4 class="description">
                        Background:
                    </h4>
                    <p class="description">
                        The next Problem is colour, while the basic feature of placing objects and check it's dimension has been acheived. 
                    </p>
                    <p class="description">
                        It would be nice to have a vague idea of the colour contrast/combination of the room.
                    </p>
                    <p class="description">
                        That is why I have focused on enabling the placement of coloured mesh.
                    </p>
                    
                    <h4 class="description">
                        Focuses This Sprint:
                    </h4>
                    <ul class="description">
                        <li>Colour Save</li>
                        <li>Colour Picker</li>
                        <li>Colour Wheel</li>
                    </ul>
                    <div class="description">
                        <CommonComp.Collapsible title="Implementation">
                            <CommonComp.Collapsible title="Colour Save">
                                <p>
                                    Saving the colour is relatively simple, as it is only adding a variable to the save.
                                </p>
                                <p>
                                    I only need to add the RGBA value to the save for each object.
                                    Then reapply the colour on load.
                                </p>
                            </CommonComp.Collapsible>
                            <CommonComp.Collapsible title="Colour Picker">
                                <p>
                                    The Next part is to allow the player to pick the colour.
                                </p>
                                <p>
                                    I Was hoping there is pre-made colour for easy Implementation. 
                                    But it seems that there is no free asset on the marketplace regarding this one.
                                </p>
                                <p>
                                    I first Implemented a colour picker using text.
                                    The player can type in either the RGBA value as number or as Hexcode.
                                </p>
                                <p>
                                    While this system does the job, it is not very intutive. 
                                    So I decided to add a colour wheel.
                                </p>
                            </CommonComp.Collapsible>
                            <CommonComp.Collapsible title="Colour Wheel">
                                <p>
                                    So I found a online tutorial about creating a colour wheel. 
                                    And I followed it to have a rough understanding of how it works 
                                    ( calculate mouse quadrant and translate it into RGB value ).
                                </p>
                                <p>
                                    One of the problem I faced was the algorithm only accounts for a circle, 
                                    so I first need to translate the mouse position to the circle.
                                    This ensures the RGBA value are within the scope.
                                </p>
                                <p>
                                    However, the mouse is still not bound within the circle and this limits how I can confirm player selected colour.
                                    To solve this problem, I ended up added a function to bound the mouse to a bounding box.
                                </p>
                                <p>
                                    I am not proud of this workaround. 
                                    But I have spent more than 20 hrs on just making the colour wheel working, 
                                    I wanted to move on and focus on other features and coming back to polish it later on.
                                </p>
                            </CommonComp.Collapsible>
                        </CommonComp.Collapsible>
                    </div>
                    <h4 class="description">
                        Result:
                    </h4>
                    <ul class="description">
                        <li>Players can now place objects with colour variations.</li>
                        <li>Players can now save and load objects colour.</li>
                    </ul>
                    <p class="description">
                        Next version will focus on enabling the player to customise a room.
                    </p>

                    <h5 class="description">
                        P.s. I will pause this project for now as I think it will take a while to add the next feature and I want to prioritise other problems.
                    </h5>
                    
                
                </header>

            </div>
        </header>
    );
}
import '../../../Project.css';
import React from 'react';

export default function Component() {
    return (
        <div className="App">
            
            <header className="Project">
                <h4 class="description" style={{ "padding-left": "0%", "padding-right": "6%" }}>
                    Introduction
                </h4>

                <p class="description" style={{ "padding-left": "0%", "padding-right": "6%" }}>
                    This is the Stage where I work on the local environment and economy.
                </p>

                <p class="description" style={{ "padding-left": "0%", "padding-right": "6%" }}>
                    There should be small floating islands nearby a Main island, each island should have their own needs and produce.
                </p>

                <p class="description" style={{ "padding-left": "0%", "padding-right": "6%" }}>
                    Ideas:
                </p>
                <ul class="description">
                    <li>Regular shipments on fixed schedule between islands</li>
                    <li>Patrol routes</li>
                    <li>Island facalities upgrade/settings</li>
                    <li>Local Supply/Demands</li>
                </ul>

                <p class="description" style={{ "padding-left": "0%", "padding-right": "6%" }}>
                    More Description will be added at the end of the previous stage.
                </p>
            </header>

        </div>
    );
}
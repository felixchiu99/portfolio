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
                    This is the Stage where I work on a Playable experience to fine tune the core experience.
                </p>
                <p class="description" style={{ "padding-left": "0%", "padding-right": "6%" }}>
                    I will focus on the first person / Ship based experience in this stage.
                </p>
                <p class="description" style={{ "padding-left": "0%", "padding-right": "6%" }}>
                    Hopefully this should highlight some flaws in the design and allow me to address it in the early stage.
                </p>

                <p class="description" style={{ "padding-left": "0%", "padding-right": "6%" }}>
                    Expected Outcome:
                </p>
                <ul class="description">
                    <li>A scene with Two Floating Island</li>
                    <li>Spawn on friendly Island with 1 Ship</li>
                    <li>There are two enemy ship patrolling the enemy Island</li>
                    <li>The player's goal is to destroy (capture) the enemy island without being destroyed</li>
                </ul>

                <p class="description" style={{ "padding-left": "0%", "padding-right": "6%" }}>
                    A Prototype Phase after Stage 1 will likely start in preperation for the next stage.
                </p>

                <p class="description" style={{ "padding-left": "0%", "padding-right": "6%" }}>
                    More Description will be added at the end of the previous stage.
                </p>
            </header>

        </div>
    );
}
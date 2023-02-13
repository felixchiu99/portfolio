import logo from './logo.svg';
import './App.css';
import YoutubeEmbed from "./YoutubeEmbed";

function App() {
  return (
    <div className="App">
      <header className="Main Title">
        <h1> Felix Chiu's Portfolio</h1>
        <header className="Project">
        <p class="description">
            Hi! I am Felix and I am currently studying in Newcastle University in MSc Computer Game Engineering.
            <br></br> 
            The course specialise in teaching student game graphic via shaders, game engine physics and various other game Technologies such as game AI and networking.
            <br></br>
            I am currently seeking employment in the video game industry as a graduate programer.
            <br></br>
            These is a place for me to store and show my projects during my studies.
        </p>
        </header>
      </header>
      <header className="Project">
        <h3>Archery VR</h3>
        <div class="row">
            <div class="column">
                <div class="round">
                    <p class="description">
                        This is a personal project I did in january 2023 during the winter break (~10 days or 80 hours).
                        <br></br>
                        The idea is to make a VR game to mimic the process of a archery competition and see if VR can help with training archery.
                        <br></br><br></br>
                        This project is the first game that I "finished" with all initial feature implemented. 
                        Of course the features was not perfect and there is a couple of bugs that I have not got time to iron out, 
                        but I did learn a lot in prototyping game ideas.
                        <br></br><br></br>
                        Unfortunately, the concept of it helping real life archery did not work out in the end.
                        This is not because of the game mechanics, 
                        but because the physical limitation of the VR headset cannot replicate the feeling of real life archery.

                    </p>
                </div>
            </div>
            <div class="column" >
                <div class="round" style={{background:"white", color: "black"}}>
                    <h4>Archery VR</h4>
                    <YoutubeEmbed embedId="2Tk4htBoEQo" />
                    <p class="description">
                        Can you get 300 points in total? 
                        If you fail, try using a opposite handed bow, you might just be using the wrong bow!
                    </p>
                    <div>
                      <a href="https://github.com/felixchiu99/VR_Archery">
                        <button class="button">Repository</button>
                      </a>
                    </div>
                </div>
            </div>
        </div>
      </header>

      <header className="Project">
        <h3>CSC8503 Game Technologies Coursework</h3>
        <div class="row">
            <div class="column">
                <div class="round">
                    <p class="description">
                        This is the coursework for the Advanced game Technologies module.
                        The main goal of this coursework is to explore the concept behind physics, AI and networked gaming mechanics.
                        <br></br><br></br>
                        My Main focus is on the networking part. 
                        I spent a week implementing how to move the character and spawn players in server, 
                        which I had some difficulty understanding at the beginning as the given material has left out quite a lot.
                        I have to work out quite a lot of missing feature by searching suggestion on the web and adpoting them in c++.

                        <br></br><br></br>
                        Other parts that i have made as well:
                        <br></br> -Sleeping physics object if the object is stationary for too long.
                        <br></br> -Simple Wandering AI which fled when approached.
                        <br></br> -Pathfinding AI which Pathfind to player if player is in maze.
                        <br></br><br></br>
                        The final result is a simple sandbox that had the capability of 4 simultaneous client connection, with disconnection process included.
                        <br></br><br></br>
                        (A skeleton framework is provided as a starting off point where rendering were already completed. 
                        The program is written in c++ and used enet for networking)
                    </p>
                </div>
            </div>
            <div class="column">
                <div class="round" style={{background:"white", color: "black"}}>
                    <h4>Goat simulator simulator</h4>
                    <YoutubeEmbed embedId="4VB93oPm0m0" />
                    <p class="description">
                        Basicly a shameless low quality ripoff of the original goat simulator... 
                    </p>
                    <div>
                      <a href="https://github.com/felixchiu99/CSC8503-Game-Technologies-Coursework">
                        <button class="button">Repository</button>
                      </a>
                    </div>
                </div>
            </div>
        </div>
      </header>

      <header className="Project">
        <h3>CSC8502 Game Graphic Coursework</h3>
        <div class="row">
            <div class="column">
                <div class="round">
                    <p class="description">
                        This is the coursework for the Advanced Graphic for Games module.
                        The main goal of this coursework is to make use of graphic and rendering concept learnt during the module to create a scene themed around the game Elden Rings.
                        <br></br><br></br>
                        The scene uses: 
                        <br></br>
                        -Scene nodes for fast mesh placement
                        <br></br>
                        -Deferred rendering for efficient rendering of multiple lights.
                        <br></br>
                        -Day night cycle created by moving a direction light
                        <br></br>
                        -Blending textures in a heightmap created terrain based on normals and height.
                        <br></br><br></br>
                        The result is more of a display of different concept I have learnt rather than a carefully created scene. 
                        That being said, it was a good experience to understand a part of game creation that I otherwise would not be interested in learning about.
                   
                        <br></br><br></br>
                        (A skeleton framework is provided as a starting off point. The program is written in c++ and uses opengl for rendering)
                    </p>
                </div>
            </div>
            <div class="column">
                <div class="round" style={{background:"white", color: "black"}}>
                    <h4>(Not) Elden Rings</h4>
                    <YoutubeEmbed embedId="dwNtbS591bI" />
                    <p class="description">
                        This is supposed to be elden rings... 
                        <br></br>
                        I don't even know what game it looks like now...
                        <br></br>
                        It sure looks like a fantasy setting, with those weird light emitting trees and floating sphere.
                    </p>
                    <div>
                      <a href="https://github.com/felixchiu99/CSC8502-Game-Graphic-Coursework">
                        <button class="button">Repository</button>
                      </a>
                    </div>
                </div>
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;

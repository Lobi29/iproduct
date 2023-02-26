import React from 'react'

export default function Body() {
  return (
    <div class="header-body">
        <div>
            <h1>
                <span class="toggle-text">
                    Coffee
                </span> <br />
            </h1>
        </div>
        <div class="main-img">
            <img src="./images/cup-dark.png" alt="BlaCK"/>
        </div>
        <div class="text">
            <div class="text-left">
                <div>
                    <h3><span class="toggle-text">
                        Coffee</span> Lovers Lifestyles
                    </h3>
                    <p>
                        People say money can't buy happiness. They lie. Money buys <span class="toggle-text">Coffee</span>, <span class="toggle-text">Coffee</span> makes Me happy! 
                    </p>
                </div>
            </div>
            <div class="right">
                <div class="text-right">
                    <div>
                        <h3>The design</h3>
                        <p>
                            Learn more what makes our <span class="toggle-text">Coffee</span> unique and different. Let's watch the video
                        </p>
                    </div>
                </div>
                <div class="play-btn">
                    <div></div>
                </div>
            </div>
        </div>
        <div class="links">
            <a href="#" class="main-link">
                <span>Explore Now</span>
            </a>
            <a href="#">Credit</a>
        </div>
    </div>
  )
}

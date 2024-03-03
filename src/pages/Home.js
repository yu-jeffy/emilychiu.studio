import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="homeContainer">
            <div className="row1">
                <div className="textColumn" style={{width: "60vw"}}>
                    <h1>Title text here</h1>
                    <p className="row1text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Netus et malesuada fames ac. Enim nunc faucibus a pellentesque sit. Mauris in aliquam sem 
                    fringilla ut morbi tincidunt augue interdum. Dolor sit amet consectetur adipiscing elit pellentesque. Amet consectetur adipiscing 
                    elit pellentesque habitant morbi tristique senectus. Mauris augue neque gravida in fermentum et. Id interdum velit 
                    laoreet id donec ultrices tincidunt. In hac habitasse platea dictumst quisque. Ac turpis egestas maecenas pharetra 
                    convallis posuere morbi leo urna. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Nulla 
                    facilisi etiam dignissim diam quis enim lobortis scelerisque. Amet risus nullam eget felis eget. Et ultrices neque ornare 
                    aenean. Eu facilisis sed odio morbi quis commodo odio aenean sed. Neque egestas congue quisque egestas diam in arcu cursus 
                    euismod. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Ornare lectus sit amet est placerat in egestas erat 
                    imperdiet. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum.</p>
                </div>
                <div className="imageColumn" style={{width: "40vw"}}>
                    <img className="row1image" src="ec_headshot.jpeg" alt="Placeholder" />
                </div>
            </div>
            <div className="row2">
                <div className="textColumn" style={{width: "60vw"}}>
                    <p className="row2text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Netus et malesuada fames ac. Enim nunc faucibus a pellentesque sit. Mauris in aliquam sem 
                    fringilla ut morbi tincidunt augue interdum. Dolor sit amet consectetur adipiscing elit pellentesque. Amet consectetur adipiscing 
                    elit pellentesque habitant morbi tristique senectus. Mauris augue neque gravida in fermentum et. Id interdum velit 
                    laoreet id donec ultrices tincidunt. In hac habitasse platea dictumst quisque. Ac turpis egestas maecenas pharetra 
                    convallis posuere morbi leo urna. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Nulla 
                    facilisi etiam dignissim diam quis enim lobortis scelerisque. Amet risus nullam eget felis eget. Et ultrices neque ornare 
                    aenean. Eu facilisis sed odio morbi quis commodo odio aenean sed. Neque egestas congue quisque egestas diam in arcu cursus 
                    euismod. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Ornare lectus sit amet est placerat in egestas erat 
                    imperdiet. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum.</p>
                </div>
                <div className="imageColumn" style={{width: "40vw"}}>
                    <img className="row2image" src="ec_piano.jpeg" alt="Placeholder" />
                </div>
            </div>
        </div>
    );
};

export default Home;
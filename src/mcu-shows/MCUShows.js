// 1a
import './MCUShows.css'
// 1b
const MCUShows = () => {
    // 1c
    return (
        // 4a
        <div className = 'MCUShows'>
            {/* 3a */}
            <h1 style = {{fontFamily: 'Georgia', textDecoration: 'underline'}}>Disney+</h1>
            <h2>MCU Show Release Dates</h2>
            <p>WandaVision: </p>
            <p>The Falcon and the Winter Soldier: </p>
            <p>Loki: </p>
            <p>Hawkeye: </p>
        </div>
    );
}
// 1d
export default MCUShows;

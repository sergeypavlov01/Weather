import sunAndCloudsIcon from "../../public/icons/big-icons/sun-and-clouds.svg";
import cloudyIcon from "../../public/icons/big-icons/clouds.svg";
import sunnyIcon from "../../public/icons/big-icons/sunny.svg";
import moonIcon from "../../public/icons/big-icons/moon-and-stars.svg";
import moonAndCloudyIcon from "../../public/icons/big-icons/moon-and-cloudy.svg";
import cloudsRainIcon from "../../public/icons/big-icons/clouds-rain.svg";
import cloudsAndSnowIcon from "../../public/icons/big-icons/clouds-and-snow.svg";
import cloudsRainAndSnow from "../../public/icons/big-icons/clouds-rain-and-snow.svg"
import sunAndCloudsInFrameIcon from "../../public/icons/frame-icons/sun-and-clouds.svg";
import cloudsInFrameIcon from "../../public/icons/frame-icons/clouds.svg";
import sunnyInFrameIcon from "../../public/icons/frame-icons/sun.svg";
import cloudsStormAndRainIcon from "../../public/icons/frame-icons/clouds-and-storm-rain.svg";
import cloudsAndRainInFrameIcon from "../../public/icons/frame-icons/clouds-and-rain.svg";
import moonAndStarsInFrameIcon from "../../public/icons/frame-icons/moon-and-stars.svg";
import moonAndCloudsInFrameIcon from "../../public/icons/frame-icons/moon-and-clouds.svg";
import cloudsAndStormInFrameIcon from "../../public/icons/frame-icons/clouds-and-storm-rain.svg";
import cloudsAndSnowInFrameIcon from "../../public/icons/frame-icons/clouds-and-snow.svg";
import cloudsRainAndSnowInFrameIcon from "../../public/icons/frame-icons/clouds-rain-and-snow.svg";

export const conditionWeather = {
    ['Cloudy']: cloudyIcon,
    ['Overcast']: cloudyIcon,
    ['Sunny']: sunnyIcon,
    ['Mist']: cloudyIcon,
    ['Fog']: cloudyIcon,
    ['Freezing fog']: cloudyIcon,
    ['Light rain']: cloudsRainIcon,
    ['Light rain shower']: cloudsRainIcon,
    ['Moderate rain']: cloudsRainIcon,
    ['Heavy rain']: cloudsRainIcon,
    ['Light snow']: cloudsAndSnowIcon,
    ['Moderate snow']: cloudsAndSnowIcon,
    ['Heavy snow']: cloudsAndSnowIcon,
    ['Light sleet']: cloudsRainAndSnow,
    ['Light snow showers']: cloudsRainAndSnow,
    ['Clear']: moonIcon,
    ['Patchy light rain with thunder']: cloudsStormAndRainIcon,
    ['Moderate or heavy rain with thunder']: cloudsStormAndRainIcon,
    ['Partly cloudy Day']: sunAndCloudsIcon,
    ['Partly cloudy Night']: moonAndCloudyIcon,
};

export const detailsIcon = {
    ['Partly Cloudy Day']: sunAndCloudsInFrameIcon,
    ['Partly Cloudy Night']: moonAndCloudsInFrameIcon,
    ['Mist']: cloudsInFrameIcon,
    ['Cloudy']: cloudsInFrameIcon,
    ['Sunny']: sunnyInFrameIcon,
    ['Overcast']: cloudsInFrameIcon,
    ['Fog']: cloudsInFrameIcon,
    ['Freezing fog']: cloudsInFrameIcon,
    ['Light rain']: cloudsAndRainInFrameIcon,
    ['Light rain shower']: cloudsAndRainInFrameIcon,
    ['Moderate rain']: cloudsAndRainInFrameIcon,
    ['Heavy rain']: cloudsAndRainInFrameIcon,
    ['Light sleet']: cloudsRainAndSnowInFrameIcon,
    ['Light snow showers']: cloudsRainAndSnowInFrameIcon,
    ['Patchy light rain with thunder']: cloudsAndStormInFrameIcon,
    ['Moderate or heavy rain with thunder']: cloudsAndStormInFrameIcon,
    ['Ligth snow']: cloudsAndSnowInFrameIcon,
    ['Moderate snow']: cloudsAndSnowInFrameIcon,
    ['Heavy snow']: cloudsAndSnowInFrameIcon,
    ['Clear']: moonAndStarsInFrameIcon,
}

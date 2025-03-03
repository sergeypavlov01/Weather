import sunAndCloudsIcon from "../../public/icons/big-icons/sun-and-clouds.svg";
import cloudyIcon from "../../public/icons/big-icons/clouds.svg";
import sunnyIcon from "../../public/icons/big-icons/sunny.svg";
import moonIcon from "../../public/icons/big-icons/moon-and-stars.svg";
import moonAndCloudyIcon from "../../public/icons/big-icons/moon-and-cloudy.svg";
import cloudsRainIcon from "../../public/icons/big-icons/clouds-rain.svg";
import sunAndCloudsInFrameIcon from "../../public/icons/frame-icons/sun-and-clouds.svg";
import cloudsInFrameIcon from "../../public/icons/frame-icons/clouds.svg";
import sunnyInFrameIcon from "../../public/icons/frame-icons/sun.svg";
import cloudsAndRainInFrameIcon from "../../public/icons/frame-icons/clouds-and-rain.svg";
import moonAndStarsInFrameIcon from "../../public/icons/frame-icons/moon-and-stars.svg";
import moonAndCloudsInFrameIcon from "../../public/icons/frame-icons/moon-and-clouds.svg";
import cloudsAndStormInFrameIcon from "../../public/icons/frame-icons/clouds-and-storm-rain.svg";
import cloudsAndSnowInFrameIcon from "../../public/icons/frame-icons/clouds-and-snow.svg";

export const conditionWeather = {
    ["Day Cloudy"]: cloudyIcon,
    ["Day Overcast"]: cloudyIcon,
    ["Day Sunny"]: sunnyIcon,
    ["Day Clear"]: sunnyIcon,
    ["Day Partly cloudy"]: sunAndCloudsIcon,
    ["Day Partly Cloudy"]: sunAndCloudsIcon,
    ["Day Light rain"]: cloudsRainIcon,
    ["Evening Cloudy"]: cloudyIcon,
    ["Evening Overcast"]: cloudyIcon,
    ["Evening Clear"]: moonIcon,
    ["Evening Partly cloudy"]: sunAndCloudsIcon,
    ["Evening Light rain"]: cloudsRainIcon,
    ["Night Light rain"]: cloudsRainIcon,
    ["Night Clear"]: moonIcon,
    ["Night Overcast"]: cloudyIcon,
    ["Night Partly cloudy"]: moonAndCloudyIcon,
};

export const detailsIcon = {
    ['Partly Cloudy Day']: sunAndCloudsInFrameIcon,
    ['Partly Cloudy Nigth']: moonAndCloudsInFrameIcon,
    ['Mist']: cloudsInFrameIcon,
    ['Cloudy']: cloudsInFrameIcon,
    ['Sunny']: sunnyInFrameIcon,
    ['Overcast']: cloudsInFrameIcon,
    ['Light rain']: cloudsAndRainInFrameIcon,
    ['Moderate rain']: cloudsAndRainInFrameIcon,
    ['Heavy rain']: cloudsAndRainInFrameIcon,
    ['Patchy light rain with thunder']: cloudsAndStormInFrameIcon,
    ['Moderate or heavy rain with thunder']: cloudsAndStormInFrameIcon,
    ['Ligth snow']: cloudsAndSnowInFrameIcon,
    ['Moderate snow']: cloudsAndSnowInFrameIcon,
    ['Heavy snow']: cloudsAndSnowInFrameIcon,
    ['Clear Day']: moonAndStarsInFrameIcon,
    ['Clear Nigth']: moonAndStarsInFrameIcon,
}

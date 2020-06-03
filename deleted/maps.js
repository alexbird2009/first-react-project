import openGoogle from './google';
import openYandex from '../src/yandex';

let openAllMaps = () => {
    openGoogle();
    openYandex();
};

export default openAllMaps;
'use strict';

import { RandomImagesCtrl } from '../controllers/randomimages'
import { RandomWordSvc } from '../services/randomword'
import { GooglImgSearchSvc } from '../services/googlimgsearch'

let ctrl = RandomImagesCtrl;
let wordSvc = RandomWordSvc.factory;
let googlImgSvc = GooglImgSearchSvc.factory;

export { wordSvc };
export { googlImgSvc };
export { ctrl };
'use strict';

class RandomImagesCtrl {
    constructor(randomWordSvc, googlImgSearchSvc) {
        this.randomWordSvc = randomWordSvc;
        this.googlImgSearchSvc = googlImgSearchSvc;
        this.load();
    }

    load() {
        this.loaded = false;
        this.randomWordSvc.getWord().then(randomWord => {
            this.word = randomWord;
            this.googlImgSearchSvc.getResults(randomWord).then(data => {
                this.results = data;
                this.loaded = true;
            })
        });
    }
}

RandomImagesCtrl.$inject = ['RandomWordSvc', 'GooglImgSearchSvc'];

export { RandomImagesCtrl }
'use strict';

class GooglImgSearchSvc {
    constructor($http) {
        this.$http = $http;
    }

    getResults(param = '') {
        param = encodeURIComponent(param);
        return this.$http.jsonp(
            'https://ajax.googleapis.com/ajax/services/search/images?v=1.0'
            + '&q=' + param
            + '&rsz=8'
            + '&imgsz=medium'
            + '&safe=active'
            + '&callback=JSON_CALLBACK').then(
            r => r.data.responseData
        )
    }

    static factory($http) {
        return new GooglImgSearchSvc($http);
    } 
};

GooglImgSearchSvc.factory.$inject = ['$http'];

export { GooglImgSearchSvc }

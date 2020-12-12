
var listNum = 5;//1ページに表示する数

var createPagination = {
    init: function () {
        this.setParameters();
		this.bindEvents();
    },
    setParameters: function () {
        this.currentIndex = 1;
		this.$pagination = $('.jsc-pagination');
        this.$items = $('.jsc-items');
        this.$item = this.$items.children('.jsc-item');
        this.$itemNum = $('.jsc-items').children('.item').length;
        this.maxIndex = Math.ceil(this.$itemNum / listNum);
    },
    bindEvents: function () {
        var myself = this;
        this.createPagination();
        this.$prevTrigger.on('click', this.moveToPrevious.bind(this));
        this.$nextTrigger.on('click', this.moveToNext.bind(this));
		this.$indicators.each(function(index){
            $(this).on('click', function(){
                myself.clickIndicator(event, index);
            });
        });
        this.createListPage(this.currentIndex);
    },
    createPagination: function () {
        this.$pagination.append('<li class="prev-page disabled"><</li>');
        for(var i = 1; i <= this.maxIndex; i++){
            this.$pagination.append('<li class="indicator">'+ i +'</li>');
        }
        this.$pagination.append('<li class="next-page">></li>');
        this.$indicators = this.$pagination.children('.indicator');
        this.$prevTrigger = this.$pagination.children('.prev-page');
        this.$nextTrigger = this.$pagination.children('.next-page');
        this.$indicators.eq(this.currentIndex - 1).addClass('current');
    },
    moveToPrevious: function (event) {
        event.preventDefault();
        if(this.currentIndex == 1 || this.$item.is(':animated')) return;
        this.currentIndex--
        this.changePage();
    },
    moveToNext: function (event) {
        event.preventDefault();
        if(this.currentIndex == this.maxIndex || this.$item.is(':animated')) return;
        this.currentIndex++
        this.changePage();
    },
    clickIndicator : function(event, index){
        event.preventDefault();
        if(this.currentIndex == this.index || this.$item.is(':animated')) return;
        this.currentIndex = index + 1;
        this.changePage();
    },
    changePage : function(){
        this.createListPage(this.currentIndex);
        if(this.currentIndex == 1){
            this.$prevTrigger.addClass('disabled');
        }else{
            this.$prevTrigger.removeClass('disabled');
        };
        if(this.currentIndex == this.maxIndex){
            this.$nextTrigger.addClass('disabled');
        }else{
            this.$nextTrigger.removeClass('disabled');
        };
        this.$indicators.removeClass('current');
        this.$indicators.eq(this.currentIndex - 1).addClass('current');
    },
    createListPage : function(index) {
        this.$item.addClass('disabled');
        var showPageIndex = listNum * (index - 1)
        for(var k = 0; k < listNum; k++){
            this.$item.eq(showPageIndex).removeClass('disabled');
            showPageIndex++
        }
    }
}

$(window).on('load', function () {
    createPagination.init();
})
//URLを変更すれば、ページを切り替えたあとにリロードしても保てる。
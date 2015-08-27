/* 
Created on : 22.Ağu.2015, 00:18:10
Author     : Ekin YÜCEL
*/
/* chart visitors */
var app = angular.module('App', ['easypiechart']);
app.controller('chartCtrl', ['$scope', function ($scope) {
    $scope.percent = 10;
    $scope.options = {
        animate: {
            duration: 0,
            enabled: false
        },
        barColor: '#ef1e25',
        scaleColor: false,
        lineWidth: 10,
        lineCap: 'circle'
    };
} ]);

// like , sub , cust , ord line graphs
$(function () {
    var myvalues = [1, 8, 5, 7, 4, 4, 9];
    $('.inlinebarlike').sparkline(myvalues, { type: 'bar', barColor: 'orange' }); // bar chart sparkline eklentisi
    $('.inlinebarsub').sparkline(myvalues, { type: 'bar', barColor: 'blue' });  // http://omnipotent.net/jquery.sparkline/#s-docs
    $('.inlinebarcust').sparkline(myvalues, { type: 'bar', barColor: 'seagreen' });
    $('.inlinebarord').sparkline(myvalues, { type: 'bar', barColor: '#f68484' });
});

/* visitor statistics */
var jsonvwuscount = (function () {
    var visitdata = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': '../data.json',
        'dataType': "json",
        'success': function (data) {
            visitdata = data["visitvwcount"];
        }
    });

    return JSON.stringify(visitdata);
})();

var jsonuscount = (function () {
    var visitdata2 = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': '../data.json',
        'dataType': "json",
        'success': function (data) {
            visitdata2 = data["visituscount"];
        }
    });

    return JSON.stringify(visitdata2);
})();

var jsonunquscount = (function () {
    var visitdata = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': '../data.json',
        'dataType': "json",
        'success': function (data) {
            visitdata = data["visitunqcount"];
        }
    });

    return JSON.stringify(visitdata);
})();

$(function () {
    $('#visitorstats').highcharts({
        title: {
            text: '2014 visitor stats',
            x: -20 //center
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Visitor'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'View count',
            data: $.parseJSON(jsonvwuscount)
        }, {
            name: 'User Count',
            data: $.parseJSON(jsonuscount)
        }, {
            name: 'Unique Views',
            data: $.parseJSON(jsonunquscount)
        }]
    });
});
/* visitor stats end */

/* minimizeit */
$('.minimizeit').click(function (e) {
    e.preventDefault();
    var $content = $(this).parent().parent().next('.block-content');
    if ($content.is(':visible')) {
        $(this).children('i').removeClass('fa fa-chevron-up');
        $(this).children('i').addClass('fa fa-chevron-down');
    } else {
        $(this).children('i').removeClass('fa fa-chevron-down');
        $(this).children('i').addClass('fa fa-chevron-up');
    }
    $content.toggle(500);
});
/* minimizeit end */

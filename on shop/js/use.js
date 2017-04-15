$(function () {
    $.getJSON("json/banner.json", function (data) {
        var _data = data;
        $(".flash p").each(function (i) {
            $(".flash p").eq(i).html(data["0"][i]);
        })
        $(".child-son1  a").each(function (i) {
            $(".child-son1 a").eq(i).html(data["1"][i]);
        })
        $(".child-son1 h4").each(function (i) {
            $(".child-son h4").eq(i).html(data["2"][i]);
        })

        $(".child-son2  a").each(function (i) {

            $(".child-son2  a").eq(i).html(data["3"]["0"][i]);
        })
        $(".child-son2 h4").each(function (i) {
            $(".child-son2 h4").eq(i).html(data["3"]["1"][i]);
        })
        $(".child-son3  a").each(function (i) {

            $(".child-son3  a").eq(i).html(data["3"]["0"][i]);
        })
        $(".child-son3 h4").each(function (i) {
            $(".child-son3 h4").eq(i).html(data["3"]["1"][i]);
        })
        $(".child-son4  a").each(function (i) {

            $(".child-son4  a").eq(i).html(data["3"]["0"][i]);
        })
        $(".child-son4 h4").each(function (i) {
            $(".child-son4 h4").eq(i).html(data["3"]["1"][i]);
        })
        $(".child-son5  a").each(function (i) {

            $(".child-son5  a").eq(i).html(data["3"]["0"][i]);
        })
        $(".child-son5 h4").each(function (i) {
            $(".child-son5 h4").eq(i).html(data["3"]["1"][i]);
        })
        $(".child-son6 a").each(function (i) {

            $(".child-son6  a").eq(i).html(data["3"]["0"][i]);
        })
        $(".child-son6 h4").each(function (i) {
            $(".child-son6 h4").eq(i).html(data["3"]["1"][i]);
        })
        $(".child-son7  a").each(function (i) {

            $(".child-son7  a").eq(i).html(data["3"]["0"][i]);
        })
        $(".child-son7 h4").each(function (i) {
            $(".child-son7 h4").eq(i).html(data["3"]["1"][i]);
        })
        $(".child-son8  a").each(function (i) {

            $(".child-son8  a").eq(i).html(data["3"]["0"][i]);
        })
        $(".child-son8 h4").each(function (i) {
            $(".child-son8 h4").eq(i).html(data["3"]["1"][i]);
        })
        $(".child-son9  a").each(function (i) {

            $(".child-son9  a").eq(i).html(data["3"]["0"][i]);
        })
        $(".child-son9 h4").each(function (i) {
            $(".child-son9 h4").eq(i).html(data["3"]["1"][i]);
        })
        $(".child-son10  a").each(function (i) {

            $(".child-son10  a").eq(i).html(data["3"]["0"][i]);
        })
        $(".child-son10 h4").each(function (i) {
            $(".child-son10 h4").eq(i).html(data["3"]["1"][i]);
        })
        $(".child-son11  a").each(function (i) {

            $(".child-son11  a").eq(i).html(data["3"]["0"][i]);
        })
        $(".child-son11 h4").each(function (i) {
            $(".child-son11 h4").eq(i).html(data["3"]["1"][i]);
        })
        $(".child-son12  a").each(function (i) {

            $(".child-son12  a").eq(i).html(data["3"]["0"][i]);
        })
        $(".child-son12 h4").each(function (i) {
            $(".child-son12 h4").eq(i).html(data["3"]["1"][i]);
        })
    })
})
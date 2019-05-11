
$(document).ready(function () {
    $('.item--ops >button').attr('disabled', 'true');
    $('.item--del >button').attr('disabled', 'true');
    $('.item--equals >button').attr('disabled', 'true');
})

var str = "";

function clear() {
    str = '';
    getString(str);
}
$('.item--del>button').on('click', function () {
    clear();
})
$('.item>button').on('click', function () {
    var num = $(this).html();
    str += num;
    getString(str);
})
$('.item--ops>button').on('click', function () {
    operator = $(this).val();
    var value_result = $('#txt-result').html();

    str = value_result + operator;
    getString(str);
})
$('.item--equals > button').on('click', function () {
    $result = $('#txt-result').html();
    $('#txt-result').html(eval($result));
    // clear();
})

function getString(value) {
    // var value_result = $('#txt-result').val();
    $('#txt-result').text(value);
    $('.item--ops >button').removeAttr('disabled');
    $('.item--del >button').removeAttr('disabled');
    $('.item--equals >button').removeAttr('disabled');
}
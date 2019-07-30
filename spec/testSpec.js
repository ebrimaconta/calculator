describe('Check Numbers and operators', function () {
  it('check number values 8', function () {
    expect($('.digit')[1].value).toEqual('8');
  });

  it('check number values 9', function () {
    expect($('.digit')[2].value).toEqual('9');
  });

  it('check number values 7', function () {
    expect($('.digit')[0].value).toEqual('7');
  });

  it('check number values 7', function () {
    expect($('.digit')[0].value).toEqual('7');
  });
   it('check oparator  divide', function () {
    expect($('#divide')[0].value).toEqual('/');
  });
  it('check oparator  plus', function () {
    expect($('#plus')[0].value).toEqual('+');
  });

  it('check oparator  minus', function () {
    expect($('#minus')[0].value).toEqual("-");
  });

  it('check oparator  times', function () {
    expect($('#multiply')[0].value).toEqual('*');
  });
});
describe('Check calculations', function () {
  it('testing multiply ', function () {
  	$('.digit')[0].click();
  	$('#multiply').trigger('click');
  	$('.digit')[0].click();
  	$('#equal').trigger('click');
    expect($('#screen')[0].innerHTML).toEqual('49');
    $('#clear').trigger('click');
  });
  it('testing substract ', function () {
    $('.digit')[1].click();
    $('#minus').trigger('click');
    $('.digit')[3].click();
    $('#equal').trigger('click');
    expect($('#screen')[0].innerHTML).toEqual('4');
    $('#clear').trigger('click');
  });

  it('testing add ', function () {
    $('.digit')[2].click();
    $('#plus').trigger('click');
    $('.digit')[4].click();
    $('#equal').trigger('click');
    expect($('#screen')[0].innerHTML).toEqual('14');
    $('#clear').trigger('click');
  });

  it('testing divde ', function () {
    $('.digit')[5].click();
    $('#divide').trigger('click');
    $('.digit')[8].click();
    $('#equal').trigger('click');
    expect($('#screen')[0].innerHTML).toEqual('2');
    $('#clear').trigger('click');
  });
  it('testing all numbers ', function () {
    $('.digit')[9].click();
    $('.digit')[8].click();
    $('.digit')[7].click();
    $('.digit')[6].click();
    $('.digit')[5].click();
    $('.digit')[4].click();
    $('.digit')[3].click();
    $('.digit')[2].click();
    $('.digit')[1].click();
    $('.digit')[0].click();
    expect($('#screen')[0].innerHTML).toEqual('321654987');
    $('#clear').trigger('click');
  });
});
/* eslint-disable no-undef */

$(document).ready(init);

function init() {
  $('#newGame').click(newGame);
  $('#flip').click(flipCoin);
  $('#game').hide();
}

function newGame() {
  const name = $('#name').val();
  $.ajax({
    url: '/games',
    method: 'post',
    dataType: 'json',
    data: { name },
    success: (rsp) => {
      console.log('rsp', rsp);
      $('#person').text(rsp.game.name);
      $('#gameID').text(rsp.game._id);
      $('#heads').text(rsp.game.heads);
      $('#tails').text(rsp.game.tails);
      $('#game').show();
    },
  });
}

function flipCoin() {
  const id = $('#gameID').text();
  const num = Math.floor(Math.random() * 2);
  $.ajax({
    url: `/games/${id}/flip`,
    method: 'put',
    dataType: 'json',
    data: { num },
    success: (rsp) => {
      console.log('rsp', rsp);
      $('#heads').text(rsp.heads);
      $('#tails').text(rsp.tails);
      $('#game').show();
    },
  });
}

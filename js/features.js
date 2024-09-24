

document.getElementById('btn-history').addEventListener('click', function(){

    document.getElementById('history-container').classList.remove('hidden');
    document.getElementById('donation-container').classList.add('hidden');

})

document.getElementById('btn-donation').addEventListener('click', function(){
    document.getElementById('history-container').classList.add('hidden');
    document.getElementById('donation-container').classList.remove('hidden');


})
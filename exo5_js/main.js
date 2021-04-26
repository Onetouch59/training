document.getElementById('button-copy').addEventListener('click',function(){
    document.getElementById('copy-text').select();
    document.execCommand('copy')
})
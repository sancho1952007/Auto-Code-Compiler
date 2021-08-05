function Compile(){
    var com='';
    chk=document.getElementById('check').checked
    if (chk){
        com=true;
    }
    else{
        com=false;
    }

    if (com){
        document.getElementById('iframe').srcdoc=document.getElementById('HTML').value+"\n<style>\n"+document.getElementById('CSS').value+'</style>'+"\n<script>"+document.getElementById('JS').value+'\n</script>';
    }
    else{
    }
}

function Run(){
    document.getElementById('iframe').srcdoc=document.getElementById('HTML').value+"\n<style>\n"+document.getElementById('CSS').value+'</style>'+"\n<script>"+document.getElementById('JS').value+'\n</script>';
}
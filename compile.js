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
        document.getElementById('iframe').srcdoc=document.getElementById('HTML').value+"\n<style>\n"+document.getElementById('CSS').value+'\n</style>'+"\n<script>"+document.getElementById('JS').value+'\n</script>';
    }
    else{
    }
}

function Run(){
    document.getElementById('iframe').srcdoc=document.getElementById('HTML').value+"\n<style>\n"+document.getElementById('CSS').value+'\n</style>'+"\n<script>"+document.getElementById('JS').value+'\n</script>';
}

function Download(){
    var element = document.createElement('a');
    code=document.getElementById('iframe').srcdoc;
    element.setAttribute('href', 'data:text/text;charset=utf-8,' +      encodeURI(code));
    element.setAttribute('download', "index.html");
    element.click();
}
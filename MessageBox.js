function MessageBox(text, title, modal){
    if(!MessageBox.id){
        MessageBox.id = 0;
    }
    MessageBox.id++;
    var id = MessageBox.id;
    var html = '';
    if(modal){
        html += '<div id="mb-overlay" class="mb-overlay"></div>';
    }
    
    html += '<div id="mb-window" class="mb-window">';
    if(title){
        html += '<div id="mb-header" class="mb-header">';
        html += title;
        html += '</div>';
    }
    
    html += text;
    
    html += '<div id="mb-close">X</div>';
    
    html += '</div>';
    
    // append to body
    
    $(html).appendTo(document.body);
    
    // add style from github file
    var nlink = $('<link id="mb-link" rel="stylesheet" type="text/css" href="https://raw.githubusercontent.com/serge-a/myPersoLib/master/MessageBox.css">');
    $('head').append(nlink);
    
    // add close event
    function onClose(){
        if(modal){
            $('#mb-overlay').remove();
        }
        
        $('#mb-window').remove();
        $('link[id="mb-link"]').remove(); // remove the style link
    }
    $('#mb-close').click(onClose);
}

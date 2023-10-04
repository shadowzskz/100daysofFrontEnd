var main_content = document.getElementById('main_content');
var new_heading = document.createElement('h2');
var new_para = document.createElement('p');

new_heading.innerHTML = "WELCOME TO NEPAL";
new_para.innerHTML = "THIS IS DONE USING JAVASCRIPT";
new_para.setAttribute('align', 'center');

main_content.appendChild(new_heading);
main_content.appendChild(new_para);

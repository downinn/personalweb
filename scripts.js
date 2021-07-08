var operator = '';
function setoperator(val,id) {    
    operator = val;    
        var idar=['mul','minus','plus','divide'];
            for(i of idar){
                    if(id==i){
                                $('#'+id).removeClass('btn-outline-primary');
                                            $('#'+id).addClass('btn-primary');
                                                    }else{
                                                                $('#'+i).removeClass('btn-primary');
                                                                            $('#'+i).addClass('btn-outline-primary');
                                                                                    }
                                                                                        }    
                                                                                        }
                                                                                        function createtableDiscreteStructures() {
                                                                                            var set = document.getElementById('set').value;
                                                                                                set = set.split(' ').map(Number);
                                                                                                    var mod = parseInt(document.getElementById('modset').value);
                                                                                                        var setlen = set.length;

    if (String(mod) == 'NaN' || set.length == 0 || operator == '') {        
            temp="Kindly Fill all fields";
                } else {
                        var temp = '<table class="table table-bordered">'
                                temp += `<tr><td>${operator + mod}</td>`;
                                        for (i = 0; i < setlen; i++) {
                                                    temp+=`<th style="background-color:red">${set[i]}</th>`
                                                            }
                                                                    temp+="</tr>";
                                                                            temp+='<tr>'        
                                                                                    temp+="</tr>";
        for (i = 0; i < setlen; i++) {
                    temp += `<tr><td style="background-color:red">${set[i]}</td>`;
                                for (j = 0; j < setlen; j++) {
                                                temp += '<td>' + eval("(" + String(set[i]) + String(operator) + String(set[j]) + ")" + String('%' + mod)) + '</td>';
                                                                // console.log("("+String(set[i])+String(operator)+String(set[j])+")"+String('%'+mod))
                                                                            }
                                                                                        temp += "</tr>"
                                                                                                }
                                                                                                        temp += '</table>';        
                                                                                                            }
                                                                                                                document.getElementById('tableans').innerHTML = temp;
                                                                                                                }

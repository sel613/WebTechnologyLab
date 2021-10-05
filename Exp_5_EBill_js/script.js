
    function calculateAmount(){
      
           var a= select.item[select.item.selectedIndex].text;
           var consumed_units=document.getElementById("units").value;
           var load=document.getElementById("loads").value;
           var result,duty,fixed,tax,energy;

                   if(a=="Domestic"){
                             if(consumed_units<=100){
                                   result=consumed_units*0;
                                   document.getElementById("ans").innerHTML =("Amount : "+result);
                             }else if(consumed_units<=200){
                                 result =(100*0)+((consumed_units-100)*1.50);
                                 document.getElementById("ans").innerHTML =("Amount : "+result);
                             }else if(consumed_units<=500){
                                 result=(100*0)+(100*2.00)+((consumed_units-200)*3.00);
                                 document.getElementById("ans").innerHTML =("Amount : "+result);
                             }else{
                                 result=(100*0)+(100*3.50)+(300*4.60)+((consumed_units-500)*6.60);
                                 document.getElementById("ans").innerHTML =("Amount: "+result);
                             }

                        
                   }
                   if(a=="Commercial"){
                       if(consumed_units>0&&consumed_units<=100){
                           duty=consumed_units*0;
                           energy=consumed_units*5;
                           fixed=load*140;
                           tax=(energy*0.05)+7;
                           result=duty+energy+fixed+tax;
                           document.getElementById("ans").innerHTML =("Amount : "+result.toFixed(2));
                       }
                       else if(consumed_units>100){
                        duty=consumed_units*0.1;
                        energy=consumed_units*8.05;
                        fixed=load*140;
                        tax=(energy*0.05)+7;
                        result=duty+energy+fixed+tax;
                        document.getElementById("ans").innerHTML =("Amount : "+result.toFixed(2));
                       }
                   }
           
    }

let cap = (str) => {
       let arr = str.split(' ');
       arr.forEach(function(item, index) {
              
         arr[index] = item.replace(item[0], item[0].toUpperCase());
       });
     
       return arr.join(' ');
     };
     
     console.log(cap("graduation loading year"));


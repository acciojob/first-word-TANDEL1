function firstWord(s) {
  // your code here
	let index = 0;
            for(let i=0; i<s.length; i++)
            {
                if(s.charAt(i) == " ")
                {
                    index = i;
                    break;
                }
            } 
            return s.slice(0, index);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));

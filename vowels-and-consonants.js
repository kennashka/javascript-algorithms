    function vowelsAndConsonants(s) {
        let vowels = ["a", "e", "i", "o", "u"];

        for (let v of s) {
            if (vowels.includes(v))
                console.log(v);
        }

        for (let v of s) {
            if (!vowels.includes(v))
                console.log(v);
        }
    }
    
    
    /*
    First, print each vowel in  on a new line (in the same order as they appeared in ). Second, print each consonant (i.e., non-vowel) in  on a new line (in the same order as they appeared in ).

Sample Input 0

javascriptloops
Sample Output 0

a
a
i
o
o
j
v
s
c
r
p
t
l
p
s
    
    
    */

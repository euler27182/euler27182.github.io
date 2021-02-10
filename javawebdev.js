var root = 16;

 function bigger()
    {
        if (root < 20) 
            {
                root = root+1;
                document.querySelector('html').style.fontSize = root + 'px';

            } else {
                root = root-4;
                document.querySelector('html').style.fontSize = root + 'px';
            }
    }

var int = setInterval(bigger, 1400);
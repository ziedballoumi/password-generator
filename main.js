document.getElementById('generate').addEventListener('click',()=>{
    const keys="azertyuiopmlkjhgfdsqwxcvbnAZERTYUIOPMLKJHGFDSQWXCVBN,;/()&";
    const length=18;
    
    let password="";
    for(let i=0;i<length;i++){
        const random= Math.floor(Math.random()* keys.length);
        password += keys[random];
    }
    document.getElementById('input').value=password;

});
document.getElementById('copy').addEventListener('click', function() {
    const passwordField = document.getElementById('input');
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
});


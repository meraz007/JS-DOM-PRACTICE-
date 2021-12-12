var title =document.getElementById('title');
var author =document.getElementById('author');
var year =document.getElementById('year');
var submit=document.getElementById('submit');
var bookList =document.getElementById('book-list');

submit.addEventListener('click',function(e){
    e.preventDefault();
    if(title.value == '' && author.value == '' && year.value == ''){
        alert("Insert The Value");
    }
    else{
        const newRow=document.createElement('tr');
        //title
        const newTitle =document.createElement('th');
        newTitle.innerHTML=title.value;
        newRow.appendChild(newTitle);
        //author
        const newAuthor =document.createElement('th');
        newAuthor.innerHTML=author.value;
        newRow.appendChild(newAuthor);
        //Year
        const newYear =document.createElement('th');
        newYear.innerHTML=year.value;
        newRow.appendChild(newYear);

        bookList.appendChild(newRow);
    }
});
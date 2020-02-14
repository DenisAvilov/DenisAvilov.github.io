var library = {};
$(document).ready(function () {
    $('#header-btn').on('click', openForm);
    $('#add-film').on('click', addToLibrary);
    $('#cancel').on('click', closeForm);

    //Проверяем масив в нутри  localStorage
    var saveFilms = localStorage.getItem('filmLibrary');
    //Если масив есть  то перезапишем его в наш обект library
    if (saveFilms) {
        library = JSON.parse(saveFilms);
        for (var key in library) {
            drawFilm(key);
        }
    }
});

function openForm() {
    $("form").addClass("d-block");
}

function closeForm() {
    event.preventDefault();
    $("form").removeClass("d-block");
}

function addToLibrary() {
    var formData = $('form').serializeArray(),
        nexArray = {},
        randomFilms,
        data = $(this).attr('data');

    //  console.log(data + "addToLibrary");
    event.preventDefault();

    //перебираем масив что бы сделать его более читабельным
    for (key in formData) {
        nexArray[formData[key]['name']] = formData[key]['value'];
    }
    //Блок обновления
    if (data == undefined) {
        //Добываем уникальное число
        randomFilms = Math.round(Math.random() * 10000);
        //Сохраняем в массиве новый фильм с уникальным значением
        library[randomFilms] = nexArray;
        //  console.log( library );
        //Отрисовываем новый фильм в html

        drawFilm(randomFilms);

    } else {
        library[data] = nexArray;
        drawFilm(data);
    }
    //перегоняем масив в JSON совместимую строку
    localStorage.setItem("filmLibrary", JSON.stringify(library));
    console.log(library);
    closeForm();
}

function drawFilm(title) {
    console.log(title + ' drawFilm(title)')
    var div = document.createElement('div'),
        divButton = document.createElement('div'),
        divR = document.createElement('div'),
        divL = document.createElement('div'),
        cover = document.createElement('div'),
        filmName = document.createElement('h2'),
        year = document.createElement('span'),
        country = document.createElement('span'),
        genre = document.createElement('span'),
        description = document.createElement('p'),
        actor = document.createElement('p'),
        buttonEdit = document.createElement('button'),
        buttonDelete = document.createElement('button'),
        comments = document.createElement('span'),
        test = 10,
        backgroundFilm = library[title]['poster'],
        film = $('.film-wrapper[data = ' + title + ']');
    //    comment  = $('.comment-name[data = '+ title +']');

    console.log(film + ' .film-wrapper[data = ' + title + ']');
    // console.log(comment + ' .comment-name[data = '+ title +']');
    //Проверка перед отрисовкой фильма, если data === 0 то добовляем
    if (film.length == 0) {

        test.className = "test";

        comments.className = "comment-name";
        comments.innerHTML = 'comments:' + test;
        comments.setAttribute('data', title); //  создание атрибута дата
        comments.onclick = clickComment;

        div.className = "col-12 film-wrapper";
        div.setAttribute('data', title); // создание атрибута дата
        divButton.className = "col button-wrapper",
            divR.className = "col-8 film-content";
        divL.className = "col-4 film-img";
        divL.style.backgroundImage = 'url(' + backgroundFilm + ')';

        actor.className = 'film-actor';
        actor.innerHTML = library[title]['library-actor'];

        cover.className = "col-12 library-cover";
        cover.style.backgroundImage = 'url(' + backgroundFilm + ')';

        filmName.className = "film-title ";
        filmName.innerHTML = library[title]['library-title'];

        year.className = "film-year ";
        year.innerHTML = library[title]['library-year'];

        country.className = "film-country";
        country.innerHTML = library[title]['library-country'];

        genre.className = "film-genre";
        genre.innerHTML = library[title]['library-genre'];

        description.className = "film-description";
        description.innerHTML = library[title]['library-description'];

        buttonEdit.className = "btn my_btn  edit";
        //Подвешиваем атрибут при нажатии по кнопке с текущим номером элемента
        buttonEdit.setAttribute('data', title);
        buttonEdit.innerHTML = 'EDIT';
        // Вызываем функцию  при нажатии
        buttonEdit.onclick = editFilm;

        buttonDelete.className = "btn my_btn my_btn-cancel delete";
        buttonDelete.innerHTML = 'DELETE';
        buttonDelete.setAttribute('data', title);
        buttonDelete.onclick = deleteFilm;

        div.appendChild(cover);
        divR.appendChild(filmName);
        divR.appendChild(description);
        divR.appendChild(country);
        divR.appendChild(year);
        divR.appendChild(genre);
        divR.appendChild(actor);
        divButton.appendChild(buttonDelete);
        divButton.appendChild(buttonEdit);
        divR.appendChild(divButton);
        cover.appendChild(divR);
        cover.appendChild(divL);

        div.appendChild(comments);

        $('.library-panel').append(div);
    } else {
        alert('готов к рисованию');
        //отрисовываем фильм после редоктирования
        var
            editWrapper = film.find('.film-img'),
            editCover = film.find('.library-cover'),
            editName = film.find('.film-title').eq(0),
            editYear = film.find('.film-year').eq(0),
            editCountry = film.find('.film-country').eq(0),
            editGenre = film.find('.film-genre').eq(0),
            editDescription = film.find('.film-description').eq(0),
            editActor = film.find('.film-actor').eq(0);


        editCover.css({'background-image': 'url(' + library[title]['poster'] + ')'});
        editWrapper.css({'background-image': 'url(' + library[title]['poster'] + ')'});
        editName.html(library[title]['library-title']);
        editYear.html(library[title]['library-year']);
        editCountry.html(library[title]['library-country']);
        editGenre.html(library[title]['library-genre']);
        editDescription.html(library[title]['library-description']);
        editActor.html(library[title]['library-actor']);
        $('#add-film').removeAttr('data');
    }
};

function clickComment() {
    //Получаем информацию о фильме по которому только что кликнули
    var
        data = $(this).attr('data'),
        commentWrapper = document.createElement('div'),
        commentWrapperInput1 = document.createElement('div'),
        commentWrapperInput2 = document.createElement('div'),
        commentWrapperInput3 = document.createElement('div'),
        commentLabel = document.createElement('label'),
        commentInput = document.createElement('input'),
        commentForm = document.createElement('form'),
        commentButton = document.createElement('button');

    commentWrapper.className = 'col comment-wrapper';
    commentInput.className = "form-control";
    commentInput.setAttribute('type', 'text');
    commentInput.setAttribute('id', 'comment-body');
    commentLabel.setAttribute('for', 'comment-body');
    commentInput.setAttribute('placeholder', 'Your comments');
    commentLabel.innerHTML = 'Comment';

    commentButton.className = 'btn btn my_btn';
    commentButton.innerHTML = 'Save';
    commentButton.setAttribute('type', 'submit');
    commentButton.setAttribute('id', 'comment-add');

    commentWrapperInput2.className = 'form-group ';
    commentWrapperInput1.className = 'form-group';

    commentWrapperInput1.appendChild(commentLabel);
    commentWrapperInput1.appendChild(commentInput);

    commentWrapperInput2.appendChild(commentButton);

    //commentForm.className = "comment-form"
    commentForm.appendChild(commentWrapperInput1);
    commentForm.appendChild(commentWrapperInput2);
    commentWrapper.appendChild(commentForm);

    $('.library-panel').append(commentWrapper);
}

function editFilm() {
    //Получаем информацию о фильме по которому только что кликнули
    //Считав ее с отрибута data который был создан ранее
    var data = $(this).attr('data');
    // console.log(data + ' editFilm');
    $('#header-btn').onClick = openForm();
    $('form #title').val(library[data]['library-title']);
    $('form #year').val(library[data]['library-year']);
    $('form #country').val(library[data]['library-country']);
    $('form #genre').val(library[data]['library-genre']);
    $('form #poster').val(library[data]['poster']);
    $('form #actor').val(library[data]['library-actor']);
    $('form #description').val(library[data]['library-description']);
    //Модификация кнопки добовление к ней атрибута, для того чтобы изменить содержание фильма а не добовлять новый
    $('#add-film').attr('data', data);
}
function deleteFilm() {
    //var del =   $('.film-wrapper[data = '+ title +']');
    var data = $(this).attr('data');
    delete library[data];
    localStorage.setItem("filmLibrary", JSON.stringify(library));
    $(this).parents('.film-wrapper').remove();
}

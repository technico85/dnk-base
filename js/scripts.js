/*
 * Мы не хотим вручную обновлять дату, поэтому будем получать ее динамически
 * каждый раз, когда пользователь заходит на сайт
 */
document.getElementById("year").innerHTML = new Date().getFullYear();

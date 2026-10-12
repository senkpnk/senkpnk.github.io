const articleForm = document.querySelector("#article-form");

console.log(articleForm)

if (articleForm) { 
    const articleStatus = document.querySelector('#article-status');
    articleForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const author = document.querySelector('#author').value.trim();
        const title = document.querySelector('#article-title').value.trim();
        const content = document.querySelector("#article-content").value.trim();
        const date = document.querySelector("#publised-at").value;

        if (!author || !title || !content || !date) { 
            articleStatus.textContent = "Заполните все поля";
            return; 
        }

        articleStatus.textContent = `Черновик "${title}" автора "${author}" проверен.`
    
    });

    articleForm.addEventListener('input', function() { 
        articleStatus.textContent = ""
    })
}  


const themeButton = document.querySelector('#theme-toggle'); 
themeButton.addEventListener('click', function() { 
    const dark = document.body.classList.toggle('dark');

    themeButton.setAttribute('aria-pressed', String(dark));
    themeButton.textContent = dark ? 'Светлая тема' : 'Темная тема'
})
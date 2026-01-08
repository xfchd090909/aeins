const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const btn = document.getElementById('fetch-btn');

btn.addEventListener('click', async () => {
    // UI Loading 状态
    btn.disabled = true;
    btn.textContent = "加载中...";
    quoteText.style.opacity = 0.5;

    try {
        // 请求我们自己的后端 API
        // Netlify 默认会将 functions 映射到 /.netlify/functions/文件名
        const response = await fetch('/.netlify/functions/get-inspiration');
        const data = await response.json();

        // 更新 UI
        quoteText.textContent = `“${data.content}”`;
        quoteAuthor.textContent = `— ${data.author}`;
    } catch (error) {
        quoteText.textContent = "哎呀，获取灵感失败了。";
        console.error(error);
    } finally {
        btn.disabled = false;
        btn.textContent = "获取新灵感";
        quoteText.style.opacity = 1;
    }
});

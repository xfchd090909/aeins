exports.handler = async function(event, context) {
    // 模拟后端数据库数据
    const quotes = [
        { content: "代码是写给人看的，只是顺便给机器执行。", author: "Harold Abelson" },
        { content: "过早优化是万恶之源。", author: "Donald Knuth" },
        { content: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
        { content: "简单性是可靠性的先决条件。", author: "Edsger W. Dijkstra" },
        { content: "唯一不变的就是变化。", author: "Heraclitus" }
    ];

    // 后端逻辑：随机选择一条
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    // 返回 JSON 响应
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(selectedQuote)
    };
};

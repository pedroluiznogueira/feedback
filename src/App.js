function App() {

    const comments = [
        {id: 1, text: 'comment one'},
        {id: 2, text: 'comment two'},
    ];

    return(
        <div>
            {comments.map((comment, index) => (
                <li key={index}>{comment.text}</li>
            ))}    
        </div>
    );
}

export default App;
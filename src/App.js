function App() {

    const comments = [
        {id: 1, text: 'comment one'},
        {id: 2, text: 'comment two'},
    ];

    const loading = false;
    const showComments = true;

    if (loading) return <h1>loading...</h1>

    return(
        <>
            <h1>Dynamic Stuff</h1>

            { showComments && (
                <div> 
                    <h1>Comments({comments.length})</h1>
                    {comments.map((comment, index) => (
                        <li key={index}>{comment.text}</li>
                    ))}    
                </div>
            )}
        </>
    );
}

export default App;

function createHeader() {
    const header = ``;

    return header;
}

function createFooter() {
    const footer = `<div class="container">
            <div class="row">
                <div class="sm-links">
                    <div class="sm-link">
                        <button><a href=""></a></button>
                    </div>
                    <div class="sm-link">
                        <button><a href=""></a></button>
                    </div>
                    <div class="sm-link">
                        <button><a href=""></a></button>
                    </div>
                    <div class="sm-link">
                        <button><a href=""></a></button>
                    </div>
                    <div class="sm-link">
                        <button><a href=""></a></button>
                    </div>
                </div>
                <div class="contact">
                    <a class="contact-link" href="contact.html">Contact</a>
                </div>
            </div>`;
    return footer;
}

document.getElementById('header').innerHTML = createHeader();
document.getElementById('footer').innerHTML = createFooter();


// Add Post
const addPost = document.querySelector('#postBtn');
let postsArray = [];

addPost.onclick = function () {
    const title = document.getElementById('title-input').value;
    const description = document.getElementById('description-input').value;

    if (title !== '' && description !== '') {
        const post = {title, description};

        postsArray.push(post);
        console.log(`Your post was added: ${JSON.stringify(post)}`);   
    } else {
        console.log("No post was added");
    }
}

// Delete Post
const deletePost = document.querySelector('#deleteBtn');
deletePost.onclick = function () {
    const removeTitle = document.getElementById('title-input').value;
    const removeDescription = document.getElementById('description-input').value;

    if (removeTitle !== '' && removeDescription !== '') {
        const removePost = { title: removeTitle, description: removeDescription };
        const index = postsArray.findIndex(post => post.title === removePost.title && post.description === removePost.description);

        if (index !== -1) {
            postsArray.splice(index, 1);
            console.log(`Post was removed: ${JSON.stringify(removePost)}`);
        } else {
            console.log(`${JSON.stringify(removePost)} was not found`);
        }
    } else {
        console.log("No post was added");
    }
}


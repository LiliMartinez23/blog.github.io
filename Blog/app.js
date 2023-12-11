
function createHeader() {
    const header = `<a href="../index.html"><h1>Blog</h1></a>
    <a class="btn btn-link" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">Menu</a>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Blog</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div class="dropdown mt-3">
            <ul>
              <li><a class="dropdown-item" href="../index.html">Home</a></li>
              <li><a class="dropdown-item" href="post.html">Blog Post</a></li>
              <li><a class="dropdown-item" href="contact.html">Contact Info</a></li>
            </ul>
          </div>
        </div>
      </div>`;

    return header;
}

function createFooter() {
    const footer = `<div class="social-media">
                        <a href="https://www.facebook.com/profile.php?id=100079939256759"><i class="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/lilianamartinezsa/"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.youtube.com/@lilimarti23/featured"><i class="fab fa-youtube"></i></a>
                    </div>
                    <div class="create">
                        <p>Created by Liliana Martinez</p>
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


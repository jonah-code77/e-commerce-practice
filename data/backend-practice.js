
const xhr = new XMLHttpRequest();

xhr.addEventListener('load',()=>{
    console.log(xhr.response);
});
xhr.open('GET','https://supersimplebackend.dev');
xhr.send();

/**
 * status code
 * start with 4--our problem) or 5--(backend problem) (400,404,500) = failed
 * start with 2(200,20,204)= succeded
 */
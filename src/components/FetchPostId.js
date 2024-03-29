const FetchPostId = async(id, method) => {

  const url = `https://jsonplaceholder.typicode.com/posts/${id}`
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error("Issue with the response");
    }

    const postInfo = await response.json();
    console.log(postInfo);
    return postInfo;

  } catch (error) {
    console.log("Error :", error);
  }

};

export default FetchPostId;

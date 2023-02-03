import axios from "axios";

async function fetchAllData(URL, setUsers) {
  const FETCHED_DATA = await axios.get(URL);
  console.log("axios", FETCHED_DATA);
  setUsers(FETCHED_DATA.data.data);
}
async function deleteUser(userId, URL, setUsers) {
  const FETCHED_DATA = await axios({
    url: URL,
    method: "DELETE",
    data: {
      userId: userId,
    },
  });
  setUsers(FETCHED_DATA.data.data);
}
async function updateUser(e, URL, setUsers) {
  const postData = {
    username: e.target.username.value,
    age: e.target.age.value,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(postData),
  };
  const FETCHED_DATA = await fetch(URL, options);
  const FETCHED_JSON = await FETCHED_DATA.json();
  setUsers(FETCHED_JSON.data);
  console.log(FETCHED_JSON);
}

async function createUser(
  currentUser,
  URL,
  setUsers,
  setIsUpdate,
  setCurrentUser,
  newUser
) {
  const postData = {
    id: currentUser.id,
    username: currentUser.username,
    age: currentUser.age,
  };

  const FETCHED_DATA = await axios({
    url: URL,
    method: "POST",
    data: {
      currentUser: postData,
    },
  });
  setUsers(FETCHED_DATA.data.data.data);
  setIsUpdate(false);
  setCurrentUser(newUser);
}
export { fetchAllData, deleteUser, updateUser, createUser };

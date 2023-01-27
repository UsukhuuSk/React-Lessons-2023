export default function UpdateForm({ setCurrentData, currentData }) {
  const UPDATE_URL = "http://localhost:8080/data";
  async function sendPutRequest(data) {
    const options = {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const FETCHED_DATA = await fetch(UPDATE_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setCurrentData(FETCHED_JSON);
    console.log(FETCHED_JSON);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(currentData.name);
    console.log("currentData", currentData);
    const sendData = {
      id: currentData.id,
      name: currentData.name,
      major: currentData.major,
    };
    sendPutRequest(sendData);
  }

  function handleFormName(e) {
    setCurrentData({ ...currentData, name: e.target.value });
  }

  function handleFormMajor(e) {
    setCurrentData({ ...currentData, major: e.target.value });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="name"
            value={currentData.name}
            onChange={handleFormName}
          />
        </label>
        <br />
        <label>
          Major:
          <input
            type="text"
            name="name"
            placeholder="Major"
            value={currentData.major}
            onChange={handleFormMajor}
          />
        </label>
        <br />
        <button>Update</button>
      </form>
    </div>
  );
}

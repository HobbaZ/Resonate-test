import React, { useState, useEffect, Suspense } from "react";
const UserInfo = React.lazy(() => import("../components/UserInfo"));

function Contacts() {
  const [infoMessage, setInfoMessage] = useState("");

  const [users, setUsers] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function getContacts() {
      const requestUserUrl =
        "https://jsonplaceholder.typicode.com/users?_limit=10";
      const requestPhotosUrl =
        "https://randomuser.me/api/?results=10&inc=picture";

      try {
        const [usersResponse, photosResponse] = await Promise.all([
          fetch(requestUserUrl),
          fetch(requestPhotosUrl),
        ]);

        const usersData = await usersResponse.json();
        const photosData = await photosResponse.json();

        setUsers(usersData);
        setPhotos(photosData.results.map((result) => result.picture.large));
      } catch (err) {
        setInfoMessage("Error getting data");
        console.error("Error getting data:", err);
      }
    }

    getContacts();
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      console.log("Users:", users);
      if (photos.length > 0) {
        console.log("Photos:", photos);
      }
    }
  }, [users, photos]);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="container-fluid pb-5">
        <h1 className="text-center py-3">Your Contacts</h1>
        <form
          className="d-flex m-auto col-xs-12 col-sm-8 col-md-6 col-lg-6 col-xl-3 mb-4
           search"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search for a contact"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>

        <div className="d-flex flex-wrap justify-content-center">
          {infoMessage && (
            <div className="alert alert-danger">{infoMessage}</div>
          )}
          <Suspense fallback={<Loading />}>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <React.Fragment key={user.id}>
                  <UserInfo user={user} photo={photos[index]} />
                </React.Fragment>
              ))
            ) : (
              <div>No Users Found for "{query}"</div>
            )}
          </Suspense>
        </div>
      </div>
    </>
  );
}

function Loading() {
  return <h2>Getting Contacts...</h2>;
}

export default Contacts;

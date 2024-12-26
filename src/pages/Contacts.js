import React, { useState, useEffect, Suspense } from "react";
const UserInfo = React.lazy(() => import("../components/UserInfo"));

function Contacts() {
  const [infoMessage, setInfoMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

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

        //Sort users by first name
        setUsers(
          usersData.sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())
          )
        );

        setPhotos(photosData.results.map((result) => result.picture.large));
      } catch (err) {
        setInfoMessage("Error getting data");
        console.error("Error getting data:", err);
      } finally {
        setLoading(false);
      }
    }

    getContacts();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="container-fluid pb-5 col-xs-12 col-sm-8 col-lg-4 contactsContainer">
        <h1 className="text-center py-3">Your Contacts</h1>
        <form
          className="w-100 mb-4 d-flex justify-content-center search"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="form-control me-2 w-100"
            type="search"
            placeholder="Search"
            aria-label="Search for a contact"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>

        <div className="container d-flex flex-column justify-content-center align-contents-center">
          {infoMessage && (
            <div className="alert alert-danger">{infoMessage}</div>
          )}
          {loading ? (
            <Loading />
          ) : (
            <Suspense fallback={<Loading />}>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user, index) => (
                  <div key={user.id} className="d-flex justify-content-center">
                    <UserInfo user={user} photo={photos[index]} />
                  </div>
                ))
              ) : (
                <div>No Users Found for "{query}"</div>
              )}
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
}

function Loading() {
  return <p>Getting Contacts...</p>;
}

export default Contacts;

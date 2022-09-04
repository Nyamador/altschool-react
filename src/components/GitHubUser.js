import React from 'react';

function GitHubUser() {
  let [data, setData] = React.useState({});

  React.useEffect(() => {
    async function gitHubApiCall() {
      const res = await fetch('https://api.github.com/users/oluwasetemi');
      const data = await res.json();
      console.log('data:', data);
      setData(data);
    }
    // document.title = `I changed the state of my counter component`
    console.log('useEffect was called');
    // addEventListener
    gitHubApiCall();
    // gitHubApiCall2()
  }, []);

  if (data?.message) {
    return (
      <p>API was not success: { data.message}</p>
    )
  }

  return (
    <div>
      <img src={data.avatar} alt={`${data.username}`} />
      <p>Name: {data.name}</p>
      <p>Username: {data.username}</p>
      <section>
        <p>{data.bio}</p>
      </section>
    </div>
  );
}

export default GitHubUser;

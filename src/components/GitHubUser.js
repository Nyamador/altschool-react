import React from 'react';

function GitHubUser() {
  let [data, setData] = React.useState({});
  let [isHover, setIsHover] = React.useState(false)

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  React.useEffect(() => {
    async function gitHubApiCall() {
      const res = await fetch('https://api.github.com/users/oluwasetemi');
      const data = await res.json();
      // console.log('data:', data);
      setData(data);
    }
    // document.title = `I changed the state of my counter component`
    console.log('useEffect was called');
    // addEventListener
    gitHubApiCall();
    // gitHubApiCall2()
  }, []);

  if (data?.message) {
    return <p>API was not success: {data.message}</p>;
  }

  const clickHandler = () => {
    window.open(`http://twitter.com/${data.twitter_username}`);
  }

  return (
    <div
      style={{ margin: '30px', border: isHover ? '2px solid black' : '2px solid transparent', display: 'flex' }}
      onClick={clickHandler}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* <a
        href="https://twitter.com/setemiojo/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Twitter
      </a> */}
      <div className="image" >
        <img
          style={{ width: '150px', borderRadius: '50%' }}
          src={data.avatar_url}
          alt={`${data.name}`}
        />
      </div>
      <div className="card-details">
        <p className='card-name'>{data.name}</p>
        <p className='card-username'>{data.login}</p>
        <section className='card-bio'>
          <p>{data.bio}</p>
        </section>
      </div>
    </div>
  );
}

export default GitHubUser;

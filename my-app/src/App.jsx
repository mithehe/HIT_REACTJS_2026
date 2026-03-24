import './App.css'
import Post from './Components/Post/Post'
import posts from './data/posts.json'
import Status from './Components/Status/Status'


function App() {

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Points</th>
              <th>Team</th>
            </tr>
          </thead>

          <tbody>
            {posts.map((post => (
              <Post
                key={post.id}
                id={post.id}
                name={post.name}
                points={post.points}
                team={post.team}
              />
            )))}
          </tbody>
        </table>
        <hr />

        <div className='status'>
          <Status></Status>
        </div>

      </div>
    </>
  )
}

export default App;

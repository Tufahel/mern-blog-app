function Post() {
    return (
        <div className="post">
        <div className="image">
          <img src="https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="" />
        </div>
        <div className="texts">
          <h2>Importance of the Greenery for the world</h2>
          <p className="info">
            <a href="" className="author">Tufahel</a>
            <time>2023-08-24</time>
          </p>
          <p className="summary">There are many ways to increase the amount of greenery in the world. We can plant trees and other plants in our yards, gardens, and communities. We can also support businesses and organizations that are committed to sustainability. By working together, we can make the world a greener and healthier place for everyone.</p>
        </div>
      </div>
    );
}

export default Post;
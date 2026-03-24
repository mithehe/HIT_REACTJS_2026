function Post({id, name, points, team}){
    return(
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{points}</td>
            <td>{team}</td>
        </tr>
    )
}

export default Post;
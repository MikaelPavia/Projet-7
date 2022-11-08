import '../Tags/Tags.scss'

function Tags ( {loc} ) {

    return (

            <div className="tags">
                  
                  {loc.tags.map((tag) => (

                      <div key={loc.id + '-' + tag } className="tag">{tag}</div>

                  ))}

            </div>
    )
    
}

export default Tags
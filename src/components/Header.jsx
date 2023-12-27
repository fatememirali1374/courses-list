const coursestatus=["All", "Active","Completed","Upcoming"]

function Header() {
  return (
    <div>
        <h1 className="">My Courses (3)</h1>
        <div className="course-status">
            {coursestatus.map((s)=><div key={s}> {s}</div>)}
        </div>
    </div>
  )
}

export default Header ;
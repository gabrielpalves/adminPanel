export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field:"user", headerName: "User", width: 230, 
    renderCell: (params) => {
        return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar"/>
                {params.row.username}
            </div>
        );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },
    {
        field: "age",
        headerName: "Age",
        width: 100,
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell:(params)=>{
            return (
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            );
        },
    },
]

// temporary data
export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://images.pexels.com/photos/1435517/pexels-photo-1435517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        status: "active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username: "Jamie Lannister",
        img: "https://images.pexels.com/photos/1435517/pexels-photo-1435517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        status: "passive",
        email: "2snow@gmail.com",
        age: 42,
    },
    {
        id: 3,
        username: "Some Guy",
        img: "https://images.pexels.com/photos/1435517/pexels-photo-1435517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        status: "pending",
        email: "3snow@gmail.com",
        age: 45,
    },
    {
        id: 4,
        username: "Other Guy",
        img: "https://images.pexels.com/photos/1435517/pexels-photo-1435517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        status: "active",
        email: "4snow@gmail.com",
        age: 16,
    },
    {
        id: 5,
        username: "Guts Berserk",
        img: "https://images.pexels.com/photos/1435517/pexels-photo-1435517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        status: "active",
        email: "5snow@gmail.com",
        age: 32,
    },
    {
        id: 6,
        username: "Griffith Falcon",
        img: "https://images.pexels.com/photos/1435517/pexels-photo-1435517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        status: "passive",
        email: "6snow@gmail.com",
        age: 21,
    },
]
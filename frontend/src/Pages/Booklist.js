import React,{useEffect} from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../store/actions';


const Booklist = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBooks())
    },[])


    const books = useSelector((state) => state.books);
    return (
        <Container>
            <div className="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#e9ecef"}}>
            <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li className="nav-item mb-2 mt-3"><a className="nav-link text-secondary" href="#"><h5>Cozy Store</h5></a></li>
                <li className="nav-item mb-2 "><a className="nav-link text-secondary" href="#"><i className="fas fa-user font-weight-bold"></i> <span className="ml-3">My Books</span></a></li>
                <li className="nav-item mb-2">
                    <a className="nav-link text-secondary" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i className="far fa-file-word font-weight-bold"></i> <span className="ml-3"> Add Book</span></a>
                    <ul className="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                     
                    </ul>
                </li>
                </ul>
                </div>
            <div className="row ">
                <div className="col-lg-12 col-md-6 col-sm-12">
                    <h5 className="mt-3 mb-3 text-secondary">
                        Check More Records of Users
                    </h5>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead className="thead-light">
                                <tr>
                                    <th>S.No</th>
                                    <th>Book Name</th>
                                    <th>Author Name</th>
                                    <th>Category</th>
                                  
                                </tr>
                            </thead>
                            <tbody>
                                {books.map((output,index) =>
                                    <tr key={index}>
                                        <td>{output.activeId}</td>
                                        <td>{output.title}</td>
                                        <td>{output.author}</td>
                                        <td>{output.category}</td>

                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Booklist;

import React, { Component } from 'react';
import { withRouter } from 'react-router';

//Class component for content table.
//main - request data from database via 'fetch' and return display back to user on library page
class ContentTable extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            libData: [],
            updateTable: true
        }
    }

    //update table using history property to route to /library page again (simulate refresh without changing session)
    handleTableUpdate(update) {
        if(update) {
            this.props.history.push("/library");
        }
    }

    //fetch data immediately after the component has mounted
    componentDidMount() {
        
        let authorization = `Bearer ${this.props.token}`

            fetch('/api/library', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + {this.props.token}
                }
            })
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    libData: result
                })
                console.log(result);
            });
    }

    handleDelete = (e) => {

        //use id value assigned to button to set target id
        let targetId = e.target.value;
        let authorization = `Bearer ${this.props.token}`

        const confirmDlt = window.confirm('Are you sure you want to delete this item?');

        //if deletion is confirmed(true) send request to delete document 
        if(confirmDlt) {
            fetch('/api/content/delete', {
                method: 'DELETE',
                body: JSON.stringify({"id": targetId}),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authorization
                }
            })
            .then(res => res.json())
            .then((result) => {
                alert(result.message)
            })
            .then(
                handleTableUpdate(this.state.updateTable)
            )
            
        }else {
            alert('Request cancelled');
        }
    }
    

    render() {

        const libData = this.state.libData;
        const currUser = this.props.user;

        return (
            <div className="table-container" style={{padding: 40, paddingTop: 0}}>
            <br></br>
            <table className="contentTable">
                <thead>
                    <tr class="active-row">
                        <td>
                            Owner
                        </td>
                        <td>
                            Category
                        </td>
                        <td>
                            Title
                        </td>
                        <td>
                            Link
                        </td>
                        <td>
                            Options
                        </td>

                    </tr>
                </thead>
                <tbody>
                    {libData.map((item, index) => (
                        <tr key={index} id={index}>
                            <td key={index}> {item.owner} </td> 
                            <td key={index}> {item.category} </td>
                            <td key={index}> {item.title} </td> 
                            <td key={index}> 
                                <button  
                                    className="todo-button"
                                    onClick={()=> {
                                        this.props.history.push(`${item.url}`);
                                    }}
                                >
                                    View
                                </button>
                            </td>
                            <td>
                                <button 
                                    className="todo-button"
                                    value={item._id}
                                    style={{borderColor: '#4d1f1f', backgroundColor: '#4d1f1f', marginRight: 50}} 
                                    onClick={this.handleDelete}>Delete</button>
                                <button 
                                    className="todo-button"
                                    style={{borderColor: '#c2dac7', backgroundColor: '#c2dac7'}} 
                                    >
                                        <a target='_blank' href='https://builder.io/content'> Edit </a>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>

        )
    }
}

export default withRouter(ContentTable);

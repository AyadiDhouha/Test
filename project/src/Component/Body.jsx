import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Badge, Button,Table,Tab,Row,Col,Nav} from 'react-bootstrap';

 function Body() {
    const names =['Robert Julia','Kennedy John','Guetta David','Ten Ben','Cesar Alex','Pool Francis','Wilson Wade','Reacher Jack','Dunord Caroline','Franquelin Benjamin'];
    const [statei, setstatei] = useState(0)
    const [state, setstate] = useState(names[0])
    const [present,setpresent]=useState([])
    const [abscent,setabscent]=useState([])
    const [excusé,setexcusé]=useState([])
    const [tous,settous]=useState([])
    return (
        <div>
            <h1>{state}</h1>

            <div style ={{marginTop:'10%'}}>      
            <Button onClick={ele=>{if(statei<names.length){setstatei(statei+1); setstate(names[statei + 1]); setabscent([...abscent,...[names[statei ]]]);settous([...tous,...[{T:names[statei],statet:'absent'}]])}}}>Absent</Button> {'      '}
            <Button onClick={ele=>{if(statei<names.length){setstatei(statei+1); setstate(names[statei + 1]); setpresent([...present,...[names[statei ]]]); settous([...tous,...[{T:names[statei],statet:'Present'}]])}}}>Present</Button>{'      '}
            <Button onClick={ele=>{if(statei<names.length){setstatei(statei+1); setstate(names[statei + 1]); setexcusé([...excusé,...[names[statei ]]]); settous([...tous,...[{T:names[statei],statet:'Excusé'}]])}}}>Excusé</Button> {'      '}
            </div>
            
            
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Tous</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Present</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Abscent</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                            <Table striped bordered hover variant="Red">
                            <thead>
                <tr>
                <th>tous</th>
                </tr>
            </thead>
            <tbody>
                
                 {tous.map(elt=><tr colSpan="2"> <td>{elt.T}</td><td>{elt.statet}</td></tr>)}
                 
            </tbody>
            </Table>  
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                    <Table striped bordered hover variant="Red">
                                    <thead>
                                    <tr>
                                    <th>Present</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {present.map(elt=><tr colSpan="2"> <td>{elt}</td></tr>)}
                                    
                                </tbody>
                                </Table>  
                            
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                    <Table striped bordered hover variant="Red">
                                    <thead>
                                    <tr>
                                    <th>Abscent</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {abscent.map(elt=><tr colSpan="2"> <td>{elt}</td></tr>)}
                                    
                                </tbody>
                                </Table>  
                            
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                    </Tab.Container>   
        </div>
)
}
export default Body ;

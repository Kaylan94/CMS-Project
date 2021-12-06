import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    formGroup: {
        padding: 10,
        fontWeight: 600,
        fontSize: 'medium',
        color: 'whitesmoke'
    },
    formControl: {
        width: 400,
        height: 30,
        padding: 5,
        borderRadius: 4,
        fontSize: 'medium'
    },
    formSelect: {
        width: 415,
        height: 40,
        padding: 5,
        borderRadius: 4,
        fontSize: 'medium'
    }
  }));

export const ContentForm = (props) => {

    //state to track values from content form
    const classes = useStyles();
    const [contentOwner, setOwner] = useState('');
    const [contentTitle, setTitle] = useState(''); 
    const [contentCategory, setCategory] = useState(''); 
    const [contentExposure, setExposure] = useState(true);

    const formSubmission=(e)=> {

        e.preventDefault();

        let contentObj={
            owner: contentOwner,
            title: contentTitle,
            category: contentCategory,
            exposure: contentExposure
        }

        let authorization = `Bearer ${props.token}`


        fetch('/api/curation/add', {
            method: "POST",
            body: JSON.stringify(contentObj),
            headers: {
                "Content-Type": "application/json",
                "Authorization": authorization
            }
        })
        .then(res => res.json())
        .then((result) => {

            alert(result.message);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    const handleOwnerChange=(e)=>{
        let newOwner = e.target.value;

        setOwner(newOwner);
    }

    const handleTitleChange=(e)=>{
        let newTitle = e.target.value;

        setTitle(newTitle);
    }

    const handleCategoryChange=(e)=>{
        let newCategory = e.target.value;

        setCategory(newCategory);
    }

    const handleExposureChange=(e)=>{
        let newExposure = e.target.value;

        setExposure(newExposure);
    }

    
    return(
        <div style={{ display: 'flex', padding: 30, backgroundColor: 'Black'}}>
        <div className="setForm" style={{margin: '0 auto'}}>
            <h2 style={{textAlign: 'center', paddingTop: 30, paddingBottom: 30, color: 'whitesmoke'}}>Content Form</h2>
        <Form >
            <fieldset  style={{borderRadius: 4, padding: 10}}>
            <Form.Group className={classes.formGroup} controlId="formContentInfo">
                <Form.Label as="legend">Owner</Form.Label>
                <br></br>
                <Form.Control 
                    type="text" 
                    placeholder="Name of content owner (username)" 
                    className={classes.formControl} 
                    value={contentOwner}
                    onChange={handleOwnerChange}
                />
            </Form.Group>
            <Form.Group className={classes.formGroup} controlId="formContentTitle">
                <Form.Label as="legend">Title</Form.Label>
                <br></br>
                <Form.Control 
                type="text" 
                placeholder="Title" 
                className={classes.formControl}
                value={contentTitle}
                onChange={handleTitleChange}
            />
            </Form.Group>
            <Form.Group className={classes.formGroup} controlId="formContentCategory">
                <Form.Label as="legend">Category</Form.Label>
                <br></br>
                <Form.Select 
                    className={classes.formSelect}
                    value={contentCategory}
                    onChange={handleCategoryChange}
                    >
                        <option>select a category</option>
                        <option value="Course">course</option>
                        <option value="Research">research</option>
                        <option value="Lifestyle">lifestyle</option>
                </Form.Select>
            </Form.Group>
            <br></br>
            <Form.Group as={Row} className={classes.formGroup}>
            <Form.Label as="legend">
                Content Exposure
            </Form.Label>
            <br></br>
                <Col sm={10}>
                    <Form.Check
                    type="radio"
                    label="  Public"
                    name="Public"
                    id="formRadio1"
                    value={contentExposure}
                    onChange={handleExposureChange}
                    />
                    <br></br>
                    <Form.Check
                    type="radio"
                    label="  Private"
                    name="Private"
                    id="formRadio2"
                    value={contentExposure}
                    onChange={handleExposureChange}
                    />
                </Col>
            </Form.Group>
            </fieldset>
            <br></br>
            <div style={{display: 'flex', padding: 20}}>
                
            <button type="button" className="build-btn" style={{marginRight: 40, marginLeft:30}} onClick={formSubmission}>
                SUBMIT
            </button>
            <button type="button" className="build-btn" >
                <a target='_blank' href='https://builder.io/content'> START </a>
            </button>
            </div>
        </Form>
        </div>
        </div>
    )
}
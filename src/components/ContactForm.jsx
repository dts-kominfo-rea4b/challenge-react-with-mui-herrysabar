import React, { useState } from 'react';
// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
import TextField from '@mui/material/TextField';
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import Card from '@mui/material/Card';
import AddCircle from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import './Contact.css';

const ContactForm = ({handleClick}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada

    const [contactName, setContactName ]= useState ('');
    const [contactPhone, setContactPhone ]= useState ('');
    const [contactEmail, setContactEmail ]= useState ('');
    const [contactPhoto, setContactPhoto ]= useState ('');

    return (
        <> 
        <Card className="card" variant="outlined" sx={{bgcolor:"cornsilk"}}>
                <TextField
                    fullWidth
                    required
                    id="name"
                    label="Name"
                    placeholder="Name"
                    sx={{ marginBottom: 2 }}
                    variant="filled"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value) }
                >
                </TextField>
                <TextField
                    fullWidth
                    required
                    id="phone"
                    label="Phone"
                    placeholder="Phone"
                    sx={{ marginBottom: 2 }}
                    variant="filled"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value) }
                >
                </TextField>
                <TextField
                    fullWidth
                    required
                    id="email"
                    label="Email"
                    placeholder="Email"
                    sx={{ marginBottom: 2 }}
                    variant="filled"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value) }
                >
                </TextField>
                <TextField
                    fullWidth
                    required
                    id="image"
                    label="Photo URL"
                    placeholder="Photo URL"
                    sx={{ marginBottom: 2 }}
                    variant="filled"
                    value={contactPhoto}
                    onChange={(e) => setContactPhoto(e.target.value) }
                >
                </TextField>
                <Button 
                    color="success" 
                    startIcon={ <AddCircle /> }
                    onClick={ ()=> {
                        let newContact = {
                          name: contactName,
                          phone: contactPhone,
                          email: contactEmail,
                          photo: contactPhoto
                        }
                        handleClick(newContact);
                    }}
                > Add New
                </Button>
            </Card>
        </>
    );
}

export default ContactForm;
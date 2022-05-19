import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ContactForm from "./ContactForm";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 300,
    maxWidth: 600,
    textAlign: 'center',
    color: 'white',
    bgcolor: 'primary.main',
    border: '4px solid',
    borderColor: 'secondary.main',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'

};

function Offer({role, salary, location, description}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    function OfferForm() {
        const [openForm, setOpenForm] = useState(false);
        const handleOpenForm = () => setOpenForm(true);
        const handleCloseForm = () => setOpenForm(false);

        return (
            <div>
                <Button sx={{
                    mt: 2,
                    width: 'auto',
                    fontWeight: 'bold',
                    color: 'secondary.main',
                    bgcolor: 'white',
                    border: '2px solid',
                    borderColor: 'secondary.main'
                }}
                        onClick={handleOpenForm}
                >APLIKUJ</Button>
                <Modal
                    open={openForm}
                    onClose={handleCloseForm}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <ContactForm />
                    </Box>
                </Modal>

            </div>
        )
    }

    return (
        <div>
            <div className="offer" onClick={handleOpen}>
                <h2 className="offer__role">{role}</h2>
                <p className="offer__salary">{salary}</p>
                <p className="offer__location">{location}</p>
            </div>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Box>
                            <Typography component="h2" sx={{fontSize: '36px', fontWeight: '700'}}>
                                {role}
                            </Typography>
                            <Typography sx={{color: 'secondary.main', fontWeight: '700'}}>{salary}</Typography>
                            <Typography sx={{color: 'secondary.main', fontWeight: '700'}}>{location}</Typography>
                        </Box>
                        <Typography sx={{}}>{description}</Typography>
                        <OfferForm/>
                    </Box>
                </Modal>
            </div>
        </div>
    );
}

export default Offer;
